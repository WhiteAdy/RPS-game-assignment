import clsx from 'clsx';
import type { Sidebar } from './Sidebar.types';
import { Button, Title } from 'components/atoms';
import { useReducer } from 'react';
import { INITIAL_SIDE_BAR_MODAL_STATE, sidebarModalReducer } from './Sidebar.utils';
import { SidebarModalHandler } from './_SidebarModalHandler';

export default function Sidebar({ className }: Sidebar) {
    const [isModalOpen, switchModalState] = useReducer(
        sidebarModalReducer,
        INITIAL_SIDE_BAR_MODAL_STATE
    );

    // We could use any type in the dispatcher because it will close all others anyway
    const closeAllModals = () => switchModalState({ type: 'changePlayerName', payload: false });

    return (
        <div className={clsx(['Sidebar', { [className!]: className }])}>
            <Title text="Player" className="Sidebar_Title" />
            <Button
                fullWidth
                variant="filled"
                onClick={() => switchModalState({ type: 'changePlayerName', payload: true })}
            >
                Change current player
            </Button>
            <Button
                fullWidth
                variant="filled"
                onClick={() => switchModalState({ type: 'resetPlayerScore', payload: true })}
            >
                Reset player score
            </Button>
            <Title text="Weapons" className="Sidebar_Title" />
            <Button
                fullWidth
                variant="filled"
                onClick={() => switchModalState({ type: 'addCustomWeapon', payload: true })}
            >
                Add a custom weapon
            </Button>
            <Button
                fullWidth
                variant="filled"
                onClick={() => switchModalState({ type: 'removeCustomWeapon', payload: true })}
            >
                Remove weapons
            </Button>
            <Title text="Game" className="Sidebar_Title" />
            <Button
                fullWidth
                variant="filled"
                onClick={() => switchModalState({ type: 'resetGame', payload: true })}
            >
                Reset the entire game
            </Button>
            <SidebarModalHandler isModalOpen={isModalOpen} closeAllModals={closeAllModals} />
        </div>
    );
}
