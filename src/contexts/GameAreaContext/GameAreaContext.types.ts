import type { WeaponName } from 'contexts';
import type { Dispatch, ReactNode } from 'react';

type Stage = 'pre-game' | 'picking' | 'result';

type GameAction =
    | {
          type: 'change-stage';
          payload: Stage;
      }
    | {
          type: 'select-weapon';
          payload: WeaponName;
      }
    | {
          type: 'start-new-round';
          payload: null;
      };

interface GameAreaState {
    currentStage: Stage;
    selectedWeapon: WeaponName | undefined;
}

interface GameAreaContextValue {
    state: GameAreaState;
    dispatch: Dispatch<GameAction>;
}

interface GameAreaContextProvider {
    children: ReactNode;
}

export type { Stage, GameAction, GameAreaState, GameAreaContextValue, GameAreaContextProvider };
