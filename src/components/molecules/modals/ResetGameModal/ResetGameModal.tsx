import { Modal } from 'components/molecules';
import type { SidebarModal } from '../types';

export default function ResetGameModal({ isOpen, onClose }: SidebarModal) {
    return (
        <Modal title="Reset game progrees" isOpen={isOpen} onClose={onClose}>
            ResetGameModal
        </Modal>
    );
}
