import type { Dispatch, SetStateAction } from 'react';

interface CardPicker {
    selectedWeapon: string | undefined;
    setSelectedWeapon: Dispatch<SetStateAction<string | undefined>>;
    className?: string;
}

export type { CardPicker };
