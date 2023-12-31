import {
    AddCustomWeaponModal,
    ChangePlayerNameModal,
    RemoveWeaponModal,
    ResetGameModal,
    ResetPlayerScoreModal,
} from 'components/molecules';
import type { SidebarModalHandler } from './SidebarModalHandler.types';

export default function SidebarModalHandler({ isModalOpen, closeAllModals }: SidebarModalHandler) {
    return (
        <>
            <ChangePlayerNameModal isOpen={isModalOpen.changePlayerName} onClose={closeAllModals} />
            <ResetPlayerScoreModal isOpen={isModalOpen.resetPlayerScore} onClose={closeAllModals} />
            <AddCustomWeaponModal isOpen={isModalOpen.addCustomWeapon} onClose={closeAllModals} />
            <RemoveWeaponModal isOpen={isModalOpen.removeCustomWeapon} onClose={closeAllModals} />
            <ResetGameModal isOpen={isModalOpen.resetGame} onClose={closeAllModals} />
        </>
    );
}
