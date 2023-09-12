import { Modal } from 'components/molecules';
import type { SidebarModal } from '../types';
import { useGameContext } from 'hooks';
import { DEFAULT_GAME_CONTEXT_VALUE } from 'contexts';

export default function ResetGameModal({ isOpen, onClose }: SidebarModal) {
    const { setWeapons, setGameHistory, showWelcomeModal } = useGameContext();

    const onAcceptResetGame = () => {
        setWeapons(DEFAULT_GAME_CONTEXT_VALUE.weapons);
        setGameHistory(DEFAULT_GAME_CONTEXT_VALUE.gameHistory);
        showWelcomeModal();
        onClose?.();
    };

    return (
        <Modal
            title="Reset game progrees"
            isOpen={isOpen}
            onClose={onClose}
            onAccept={onAcceptResetGame}
        >
            <div className="ResetGameProgress">
                <p>Are you sure you want to reset all the game progress?</p>
                <strong>Player data and custom weapons will be gone!</strong>
            </div>
        </Modal>
    );
}
