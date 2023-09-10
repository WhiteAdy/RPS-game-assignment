import { createContext, useState } from 'react';
import type {
    GameContextProvider,
    GameContextValue,
    GameHistory,
    PlayerName,
    Weapons,
} from './GameContext.types';
import { DEFAULT_GAME_CONTEXT_VALUE, DEFAULT_WEAPONS } from './GameContext.utils';
import useLocalStorage from '../../hooks/useLocalStorage/useLocalStorage';

const GameContext = createContext<GameContextValue>(DEFAULT_GAME_CONTEXT_VALUE);

export default function GameContextProvider({ children }: GameContextProvider) {
    const [customWeapons, setCustomWeapons] = useLocalStorage<Weapons>(
        'RPC:custom-weapons',
        DEFAULT_GAME_CONTEXT_VALUE.customWeapons
    );
    const [gameHistory, setGameHistory] = useLocalStorage<GameHistory>(
        'RPC:game-history',
        DEFAULT_GAME_CONTEXT_VALUE.gameHistory
    );
    const [currentPlayerName, setCurrentPlayerName] = useState<PlayerName>('');

    return (
        <GameContext.Provider
            value={{
                defaultWeapons: DEFAULT_WEAPONS,
                customWeapons,
                setCustomWeapons,
                gameHistory,
                setGameHistory,
                currentPlayerName,
                setCurrentPlayerName,
            }}
        >
            {children}
        </GameContext.Provider>
    );
}

export { GameContext };
