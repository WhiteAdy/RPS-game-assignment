import type { ModalProps } from './Modal.types';
import { BTN_PROPS } from './Modal.utils';
import clsx from 'clsx';
import crossIcon from 'assets/icons/cross.svg';
import { Button, IconButton } from 'components/atoms';
import { useCallback, useEffect, useRef } from 'react';

export default function Modal({
    title,
    isOpen = true,
    onAccept = () => {},
    onClose = () => {},
    acceptBtnProps: {
        hidden: acceptHidden = BTN_PROPS.ACCEPT.hidden,
        disabled: acceptDisabled = BTN_PROPS.ACCEPT.disabled,
        label: acceptLabel = BTN_PROPS.ACCEPT.label,
        ...acceptRestProps
    } = BTN_PROPS.ACCEPT,
    closeBtnProps: {
        hidden: closeHidden = BTN_PROPS.CLOSE.hidden,
        disabled: closeDisabled = BTN_PROPS.CLOSE.disabled,
        label: closeLabel = BTN_PROPS.CLOSE.label,
        ...closeRestProps
    } = BTN_PROPS.CLOSE,
    hideCloseIcon = false,
    children,
}: ModalProps) {
    const modalElementRef = useRef<HTMLDivElement>(null);

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
        if (!isOpen) removeEventListeners();
        else addEventListeners();
        return () => {
            removeEventListeners();
        };
    }, [addEventListeners, isOpen, removeEventListeners]);

    return (
        <div
            className={clsx(['Modal'], {
                isOpen: Boolean(isOpen),
                isClosed: !isOpen,
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
                        <Button
                            disabled={acceptDisabled}
                            variant="filled"
                            onClick={onAccept}
                            {...acceptRestProps}
                        >
                            {acceptLabel}
                        </Button>
                    )}
                    {!closeHidden && (
                        <Button disabled={closeDisabled} onClick={onClose} {...closeRestProps}>
                            {closeLabel}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
