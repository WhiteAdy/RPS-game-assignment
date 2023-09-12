interface Sidebar {
    className?: string;
}

type SidebarModalStateKey =
    | 'changePlayerName'
    | 'resetPlayerScore'
    | 'addCustomWeapon'
    | 'removeCustomWeapon'
    | 'resetGame';

type SidebarModalState = Record<SidebarModalStateKey, boolean>;

type SidebarAction = { type: SidebarModalStateKey; payload: boolean };

export type { Sidebar, SidebarModalStateKey, SidebarModalState, SidebarAction };
