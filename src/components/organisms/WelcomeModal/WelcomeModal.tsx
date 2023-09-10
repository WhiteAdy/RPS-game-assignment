import { Modal } from 'components/molecules';
import type { WelcomeModal } from './WelcomeModal.types';
import { useGameContext } from 'hooks';

export default function WelcomeModal({ isOpen }: WelcomeModal) {
    const onSubmit = () => console.log('onAccept');
    const { isOpenWelcomeModal, hideWelcomeModal } = useGameContext();

    return (
        <Modal title="Welcome to the RPS game!" onAccept={onSubmit} isOpen={isOpenWelcomeModal}>
            <p>This is a special game of Rock-Paper-Scissors. Instructions below:</p>
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
                {/* <li>Click "Submit" below to begin playing!</li> */}
            </ul>
        </Modal>
    );
}
