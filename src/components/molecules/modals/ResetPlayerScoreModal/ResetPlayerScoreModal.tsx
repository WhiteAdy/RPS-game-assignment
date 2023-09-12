import { Modal } from 'components/molecules';
import type { SidebarModal } from '../types';
import { useGameContext } from 'hooks';

export default function ResetPlayerScoreModal({ isOpen, onClose }: SidebarModal) {
    const { currentPlayerName, resetPlayerScore } = useGameContext();

    const onAcceptResetScore = () => {
        resetPlayerScore(currentPlayerName);
        onClose?.();
    };

    return (
        <Modal
            title="Reset player score"
            isOpen={isOpen}
            onClose={onClose}
            onAccept={onAcceptResetScore}
        >
            <form className="ResetPlayerScoreForm">
                <p>Are you sure you want to reset the score for the following player?</p>
                <strong>{currentPlayerName}</strong>
            </form>
        </Modal>
    );
}
