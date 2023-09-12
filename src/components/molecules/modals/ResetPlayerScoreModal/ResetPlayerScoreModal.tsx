import { Modal } from 'components/molecules';
import type { SidebarModal } from '../types';

export default function ResetPlayerScoreModal({ isOpen, onClose }: SidebarModal) {
    return (
        <Modal title="Reset player score" isOpen={isOpen} onClose={onClose}>
            ResetPlayerScoreModal
        </Modal>
    );
}
