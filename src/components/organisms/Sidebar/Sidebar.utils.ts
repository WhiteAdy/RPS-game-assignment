import type { SidebarAction, SidebarModalState, SidebarModalStateKey } from './Sidebar.types';

const INITIAL_SIDE_BAR_MODAL_STATE: Record<SidebarModalStateKey, boolean> = {
    changePlayerName: false,
    resetPlayerScore: false,
    addCustomWeapon: false,
    removeCustomWeapon: false,
    resetGame: false,
};

const sidebarModalReducer = (_state: SidebarModalState, { type, payload }: SidebarAction) => {
    return { ...INITIAL_SIDE_BAR_MODAL_STATE, [type]: payload };
};

export { INITIAL_SIDE_BAR_MODAL_STATE, sidebarModalReducer };
