import { Modal } from 'components/molecules';
import type { SidebarModal } from '../types';
import { TextField } from 'components/atoms';
import { useGameContext } from 'hooks';
import type { ChangeEventHandler } from 'react';
import { useState, type FormEventHandler } from 'react';

const CHANGE_PLAYER_NAME_FORM_ID = 'ChangePlayerNameForm';

export default function ChangePlayerNameModal({ isOpen, onClose }: SidebarModal) {
    const { currentPlayerName, registerPlayerName } = useGameContext();
    const [newPlayerName, setNewPlayerName] = useState('');

    const onSubmitForm: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        registerPlayerName(newPlayerName);
        onClose?.();
    };

    const onChangePlayerName: ChangeEventHandler<HTMLInputElement> = (e) => {
        setNewPlayerName(e.target.value);
    };

    const isNameForbidden = !newPlayerName || newPlayerName === currentPlayerName;

    return (
        <Modal
            title="Change current player"
            isOpen={isOpen}
            onClose={onClose}
            acceptBtnProps={{
                form: CHANGE_PLAYER_NAME_FORM_ID,
                disabled: isNameForbidden,
                type: 'submit',
            }}
        >
            <form
                id={CHANGE_PLAYER_NAME_FORM_ID}
                onSubmit={onSubmitForm}
                className="ChangePlayerNameForm"
            >
                <p>
                    Current player name: <strong>{currentPlayerName}</strong>
                </p>
                <TextField
                    title="Please enter your newly desired player name"
                    placeholder="Max. 18 characters"
                    autoFocus={isOpen}
                    maxLength={18}
                    className="ChangePlayerNameForm_InputContainer"
                    value={newPlayerName}
                    onChange={onChangePlayerName}
                />
            </form>
        </Modal>
    );
}
