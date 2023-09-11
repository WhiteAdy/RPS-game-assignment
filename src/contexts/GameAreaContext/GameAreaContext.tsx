import { createContext, useReducer } from 'react';
import type { GameAreaContextProvider, GameAreaContextValue } from './GameAreaContext.types';
import {
    DEFAULT_GAME_AREA_CONTEXT_VALUE,
    INITIAL_GAME_AREA_STATE,
    gameAreaReducer,
} from './GameAreaContext.utils';

const GameAreaContext = createContext<GameAreaContextValue>(DEFAULT_GAME_AREA_CONTEXT_VALUE);

export default function GameAreaContextProvider({ children }: GameAreaContextProvider) {
    const [state, dispatch] = useReducer(gameAreaReducer, INITIAL_GAME_AREA_STATE);

    return (
        <GameAreaContext.Provider value={{ state, dispatch }}>{children}</GameAreaContext.Provider>
    );
}

export { GameAreaContext };
