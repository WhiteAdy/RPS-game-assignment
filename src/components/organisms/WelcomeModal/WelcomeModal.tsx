import type { ModalBtnProps } from 'components/molecules';
import { Instructions, Modal } from 'components/molecules';
import { useGameContext } from 'hooks';
import { TextField } from 'components/atoms';
import type { ChangeEventHandler } from 'react';
import { useState } from 'react';

const closeBtnProps: ModalBtnProps = {
    hidden: true,
};

export default function WelcomeModal() {
    const { isOpenWelcomeModal, hideWelcomeModal, registerPlayerName } = useGameContext();
    const [playerName, setPlayerName] = useState('');
    const onChangePlayerName: ChangeEventHandler<HTMLInputElement> = (e) => {
        setPlayerName(e.target.value);
    };

    const acceptBtnProps: ModalBtnProps = {
        disabled: !playerName,
        label: 'Start playing!',
    };

    const onAccept = () => {
        registerPlayerName(playerName);
        hideWelcomeModal();
    };

    return (
        <Modal
            title="Welcome to the RPS game!"
            onAccept={onAccept}
            isOpen={isOpenWelcomeModal}
            closeBtnProps={closeBtnProps}
            acceptBtnProps={acceptBtnProps}
            hideCloseIcon
        >
            <Instructions />
            <TextField
                title="Player Name:"
                placeholder="Max. 18 characters"
                maxLength={18}
                value={playerName}
                onChange={onChangePlayerName}
            />
        </Modal>
    );
}
