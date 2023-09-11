import { Instructions, Modal } from 'components/molecules';
import { useGameContext } from 'hooks';
import { TextField } from 'components/atoms';
import type { ChangeEventHandler, FormEventHandler } from 'react';
import { useState } from 'react';
import { DEFAULT_MODAL_BTN_PROPS, FORM_ID } from './WelcomeModal.utils';

export default function WelcomeModal() {
    const { isOpenWelcomeModal, hideWelcomeModal, registerPlayerName } = useGameContext();
    const [playerName, setPlayerName] = useState('');
    const onChangePlayerName: ChangeEventHandler<HTMLInputElement> = (e) => {
        setPlayerName(e.target.value);
    };

    const onAccept = () => {
        registerPlayerName(playerName);
        hideWelcomeModal();
    };

    const onSubmitForm: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        onAccept();
    };

    return (
        <Modal
            title="Welcome to the RPS game!"
            onAccept={onAccept}
            isOpen={isOpenWelcomeModal}
            closeBtnProps={DEFAULT_MODAL_BTN_PROPS.CLOSE}
            acceptBtnProps={{ ...DEFAULT_MODAL_BTN_PROPS.ACCEPT, disabled: !playerName }}
            hideCloseIcon
        >
            <Instructions />
            <form id={FORM_ID} onSubmit={onSubmitForm}>
                <TextField
                    title="Player Name:"
                    placeholder="Max. 18 characters"
                    maxLength={18}
                    value={playerName}
                    onChange={onChangePlayerName}
                    autoFocus
                />
            </form>
        </Modal>
    );
}
