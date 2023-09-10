import type { GameContextValue, PlayerData, Weapon } from './GameContext.types';
import rockImageUrl from 'assets/images/rock.png';
import paperImageUrl from 'assets/images/paper.png';
import scissorsImageUrl from 'assets/images/scissors.png';
import { noop } from 'utils';

const DEFAULT_WEAPON_NAMES = {
    ROCK: 'Rock',
    PAPER: 'Paper',
    SCISSORS: 'Scissors',
};

const DEFAULT_PLAYER_DATA: PlayerData = {
    wins: 0,
    losses: 0,
    draws: 0,
    totalPlays: 0,
};

const DEFAULT_WEAPONS: Array<Weapon> = [
    {
        name: DEFAULT_WEAPON_NAMES.ROCK,
        imageUrl: rockImageUrl,
        rules: {
            defeats: [DEFAULT_WEAPON_NAMES.SCISSORS],
            defeatedBy: [DEFAULT_WEAPON_NAMES.PAPER],
        },
    },
    {
        name: DEFAULT_WEAPON_NAMES.PAPER,
        imageUrl: paperImageUrl,
        rules: {
            defeats: [DEFAULT_WEAPON_NAMES.ROCK],
            defeatedBy: [DEFAULT_WEAPON_NAMES.SCISSORS],
        },
    },
    {
        name: DEFAULT_WEAPON_NAMES.SCISSORS,
        imageUrl: scissorsImageUrl,
        rules: {
            defeats: [DEFAULT_WEAPON_NAMES.PAPER],
            defeatedBy: [DEFAULT_WEAPON_NAMES.ROCK],
        },
    },
];

const DEFAULT_GAME_CONTEXT_VALUE: GameContextValue = {
    defaultWeapons: DEFAULT_WEAPONS,
    customWeapons: [],
    setCustomWeapons: noop,
    gameHistory: null,
    setGameHistory: noop,
    currentPlayerName: '',
    setCurrentPlayerName: noop,
};

export { DEFAULT_WEAPONS, DEFAULT_GAME_CONTEXT_VALUE, DEFAULT_PLAYER_DATA };
