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
};

const DEFAULT_WEAPONS: Array<Weapon> = [
    {
        name: DEFAULT_WEAPON_NAMES.ROCK,
        imageUrl: rockImageUrl,
        rules: {
            defeats: [DEFAULT_WEAPON_NAMES.SCISSORS],
        },
    },
    {
        name: DEFAULT_WEAPON_NAMES.PAPER,
        imageUrl: paperImageUrl,
        rules: {
            defeats: [DEFAULT_WEAPON_NAMES.ROCK],
        },
    },
    {
        name: DEFAULT_WEAPON_NAMES.SCISSORS,
        imageUrl: scissorsImageUrl,
        rules: {
            defeats: [DEFAULT_WEAPON_NAMES.PAPER],
        },
    },
];

const DEFAULT_GAME_CONTEXT_VALUE: GameContextValue = {
    weapons: DEFAULT_WEAPONS,
    setWeapons: noop,
    gameHistory: null,
    setGameHistory: noop,
    currentPlayerName: '',
    setCurrentPlayerName: noop,
    isOpenWelcomeModal: true,
    setIsOpenWelcomeModal: noop,
};

export { DEFAULT_GAME_CONTEXT_VALUE, DEFAULT_PLAYER_DATA };
