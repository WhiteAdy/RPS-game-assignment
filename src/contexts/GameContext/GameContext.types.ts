import type { Dispatch, ReactNode, SetStateAction } from 'react';

type WeaponName = string;
type PlayerName = string;

interface PlayerData {
    wins: number;
    losses: number;
    draws: number;
    totalPlays: number;
}

interface WeaponRules {
    defeats: Array<WeaponName>;
    defeatedBy: Array<WeaponName>;
}

interface Weapon {
    name: string;
    imageUrl: string;
    rules: WeaponRules;
}

type GameHistory = Record<PlayerName, PlayerData> | null;

type Weapons = Array<Weapon>;

interface GameContextValue {
    defaultWeapons: Weapons;
    customWeapons: Weapons;
    setCustomWeapons: Dispatch<SetStateAction<Weapons>>;
    gameHistory: GameHistory;
    setGameHistory: Dispatch<SetStateAction<GameHistory>>;
    currentPlayerName: PlayerName;
    setCurrentPlayerName: Dispatch<SetStateAction<PlayerName>>;
    isOpenWelcomeModal: boolean;
    setIsOpenWelcomeModal: Dispatch<SetStateAction<boolean>>;
}

interface GameContextProvider {
    children: ReactNode;
}

export type {
    GameContextValue,
    Weapon,
    WeaponName,
    PlayerName,
    GameContextProvider,
    Weapons,
    GameHistory,
    PlayerData,
};
