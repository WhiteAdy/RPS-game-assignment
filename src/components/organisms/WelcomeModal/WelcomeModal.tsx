import type { ModalBtnProps } from 'components/molecules';
import { Modal } from 'components/molecules';
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
            <p>Instructions:</p>
            <ul className="List">
                <li>
                    Choose your player name, the progress for this name will be saved locally so
                    that you can track your progress in future sessions.
                </li>
                <li>
                    Your current score can be seen on the right side of the screen, along with the
                    leaderboard.
                </li>
                <li>
                    After you click "Begin round" you will have 3 seconds to choose your weapon,
                    otherwise a random one will be chosen for you.
                </li>
                <li>
                    You can add your own weapons and rules! Do that by clicking "Add weapons"
                    button.
                </li>
                <li>You can reset the game progress at any time by clicking the "Reset" button.</li>
            </ul>
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
