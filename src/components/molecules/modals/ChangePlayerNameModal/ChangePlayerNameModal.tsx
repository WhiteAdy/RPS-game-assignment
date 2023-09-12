import { Modal } from 'components/molecules';
import type { SidebarModal } from '../types';

export default function ChangePlayerNameModal({ isOpen, onClose }: SidebarModal) {
    return (
        <Modal title="Change player name" isOpen={isOpen} onClose={onClose}>
            ChangePlayerNameModal
        </Modal>
    );
}
