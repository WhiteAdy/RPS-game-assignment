import { Modal } from 'components/molecules';
import type { SidebarModal } from '../types';

export default function AddCustomWeaponModal({ isOpen, onClose }: SidebarModal) {
    return (
        <Modal title="Add custom weapon" isOpen={isOpen} onClose={onClose}>
            AddCustomWeaponModal
        </Modal>
    );
}
