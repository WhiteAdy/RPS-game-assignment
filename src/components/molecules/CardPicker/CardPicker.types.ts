import type { GameAction, WeaponName } from 'contexts';
import type { Dispatch } from 'react';

interface CardPicker {
    selectedWeapon: WeaponName | undefined;
    dispatch: Dispatch<GameAction>;
    className?: string;
}

export type { CardPicker };
