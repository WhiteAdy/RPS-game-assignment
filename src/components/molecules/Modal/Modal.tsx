import type { InternalModalStatus, ModalProps } from './Modal.types';
import { BTN_PROPS, MODAL_CLOSING_DURATION } from './Modal.utils';
import clsx from 'clsx';
import crossIcon from 'assets/icons/cross.svg';
import { Button, IconButton } from 'components/atoms';
import { useCallback, useEffect, useRef, useState } from 'react';

export default function Modal({
    title,
    isOpen = true,
    onAccept = () => {},
    onClose = () => {},
    acceptBtnProps: {
        hidden: acceptHidden = BTN_PROPS.ACCEPT.hidden,
        disabled: acceptDisabled = BTN_PROPS.ACCEPT.disabled,
        label: acceptLabel = BTN_PROPS.ACCEPT.label,
    } = BTN_PROPS.ACCEPT,
    closeBtnProps: {
        hidden: closeHidden = BTN_PROPS.CLOSE.hidden,
        disabled: closeDisabled = BTN_PROPS.CLOSE.disabled,
        label: closeLabel = BTN_PROPS.CLOSE.label,
    } = BTN_PROPS.CLOSE,
    hideCloseIcon = false,
    children,
}: ModalProps) {
    const [internalModalStatus, setInternalModalStatus] = useState<InternalModalStatus>(
        isOpen ? 'open' : 'closed'
    );

    const modalElementRef = useRef<HTMLDivElement>(null);
    const isFirstRenderRef = useRef(true);

    const shouldShowIsOpenClassName = ['open', 'isClosing'].includes(internalModalStatus);

    const clickOutsideHandler = useCallback(
        (e: MouseEvent) => {
            if (e.target === modalElementRef.current) {
                onClose();
            }
        },
        [onClose]
    );

    const escapeKeyPressHandler = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        },
        [onClose]
    );

    const addEventListeners = useCallback(() => {
        window.addEventListener('click', clickOutsideHandler);
        window.addEventListener('keydown', escapeKeyPressHandler);
    }, [clickOutsideHandler, escapeKeyPressHandler]);

    const removeEventListeners = useCallback(() => {
        window.removeEventListener('click', clickOutsideHandler);
        window.removeEventListener('keydown', escapeKeyPressHandler);
    }, [clickOutsideHandler, escapeKeyPressHandler]);

    useEffect(() => {
        if (!isOpen) {
            if (!isFirstRenderRef.current) {
                setInternalModalStatus('isClosing');
                removeEventListeners();
                setTimeout(() => {
                    setInternalModalStatus('closed');
                }, MODAL_CLOSING_DURATION);
            }
            isFirstRenderRef.current = false;
        } else {
            setInternalModalStatus('open');
            addEventListeners();
        }
        return () => {
            removeEventListeners();
            isFirstRenderRef.current = true;
        };
    }, [addEventListeners, isOpen, removeEventListeners]);

    return (
        <div
            className={clsx(['Modal'], {
                isOpen: shouldShowIsOpenClassName,
                isClosing: internalModalStatus === 'isClosing',
            })}
            ref={modalElementRef}
        >
            <div className="Container">
                <div className="Header">
                    <h4>{title}</h4>
                    {!hideCloseIcon && (
                        <IconButton
                            iconSrc={crossIcon}
                            className="CloseIconBtn"
                            onClick={onClose}
                        />
                    )}
                </div>
                <div className="Body">{children}</div>
                <div className="Footer">
                    {!acceptHidden && (
                        <Button disabled={acceptDisabled} variant="filled" onClick={onAccept}>
                            {acceptLabel}
                        </Button>
                    )}
                    {!closeHidden && (
                        <Button disabled={closeDisabled} onClick={onClose}>
                            {closeLabel}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
