import { createContext, useState } from 'react';
import type {
    GameContextProvider,
    GameContextValue,
    GameHistory,
    PlayerName,
    Weapons,
} from './GameContext.types';
import { DEFAULT_GAME_CONTEXT_VALUE } from './GameContext.utils';
import { useLocalStorage } from 'hooks';
import { WelcomeModal } from 'components/molecules';

const GameContext = createContext<GameContextValue>(DEFAULT_GAME_CONTEXT_VALUE);

export default function GameContextProvider({ children }: GameContextProvider) {
    const [weapons, setWeapons] = useLocalStorage<Weapons>(
        'RPC:weapons',
        DEFAULT_GAME_CONTEXT_VALUE.weapons
    );
    const [gameHistory, setGameHistory] = useLocalStorage<GameHistory>(
        'RPC:game-history',
        DEFAULT_GAME_CONTEXT_VALUE.gameHistory
    );
    const [currentPlayerName, setCurrentPlayerName] = useState<PlayerName>('');
    const [isOpenWelcomeModal, setIsOpenWelcomeModal] = useState(true);

    return (
        <GameContext.Provider
            value={{
                weapons,
                setWeapons,
                gameHistory,
                setGameHistory,
                currentPlayerName,
                setCurrentPlayerName,
                isOpenWelcomeModal,
                setIsOpenWelcomeModal,
            }}
        >
            {children}
            <WelcomeModal />
        </GameContext.Provider>
    );
}

export { GameContext };
