import { noop } from 'utils';
import type { GameAction, GameAreaContextValue, GameAreaState } from './GameAreaContext.types';

const INITIAL_GAME_AREA_STATE: GameAreaState = {
    currentStage: 'pre-game',
    selectedWeapon: undefined,
};

const DEFAULT_GAME_AREA_CONTEXT_VALUE: GameAreaContextValue = {
    state: INITIAL_GAME_AREA_STATE,
    dispatch: noop,
};

const gameAreaReducer = (state: GameAreaState, { type, payload }: GameAction) => {
    switch (type) {
        case 'change-stage':
            return { ...state, currentStage: payload };
        case 'select-weapon':
            return { ...state, selectedWeapon: payload };
        case 'start-new-round':
            return INITIAL_GAME_AREA_STATE;
        default:
            return state;
    }
};

export { INITIAL_GAME_AREA_STATE, DEFAULT_GAME_AREA_CONTEXT_VALUE, gameAreaReducer };
