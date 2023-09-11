import { GameAreaContext } from 'contexts';
import { useContext } from 'react';

export default function useGameAreaContext() {
    const gameAreaContext = useContext(GameAreaContext);

    if (!gameAreaContext)
        throw new Error('Please wrap your component with GameAreaContextProvider!');

    return gameAreaContext;
}
