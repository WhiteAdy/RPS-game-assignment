import { Modal } from 'components/molecules';
import type { SidebarModal } from '../types';

export default function RemoveCustomWeaponModal({ isOpen, onClose }: SidebarModal) {
    return (
        <Modal title="Remove weapon" isOpen={isOpen} onClose={onClose}>
            <div className="RemoveCustomWeaponModalForm"></div>
        </Modal>
    );
}
