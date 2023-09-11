import { GameAreaContext } from 'contexts';
import { useContext } from 'react';
import { noop } from 'utils';

export default function useGameAreaContext() {
    const gameAreaContext = useContext(GameAreaContext);

    if (gameAreaContext.dispatch === noop)
        throw new Error('Please wrap your component with GameAreaContextProvider!');

    return gameAreaContext;
}
