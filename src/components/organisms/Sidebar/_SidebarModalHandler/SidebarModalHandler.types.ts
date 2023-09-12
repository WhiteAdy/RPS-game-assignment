import type { SidebarModalState } from '../Sidebar.types';

interface SidebarModalHandler {
    isModalOpen: SidebarModalState;
    closeAllModals: () => void;
}

export type { SidebarModalHandler };
