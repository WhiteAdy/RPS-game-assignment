import { MainLayout } from 'components/layouts';
import { Modal } from 'components/molecules';
import { GameArea, ScoreArea } from 'components/organisms';
import { GameContextProvider } from 'contexts';
import { useState } from 'react';

export default function App() {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <GameContextProvider>
            <MainLayout>
                <GameArea openModal={openModal} />
                <ScoreArea />
            </MainLayout>
            <Modal
                title="Welcome to the RPS game!"
                onClose={closeModal}
                onAccept={() => console.log('onAccept')}
                isOpen={isModalOpen}
            >
                <div>aici modal body</div>
            </Modal>
        </GameContextProvider>
    );
}
