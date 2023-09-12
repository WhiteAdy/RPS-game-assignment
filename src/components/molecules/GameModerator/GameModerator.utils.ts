import type { Stage } from 'contexts';
import { PreGameStage, PickingStage, ResultStage } from './_stages';

const selectStageComponent = (currentStage: Stage) => {
    switch (currentStage) {
        case 'pre-game':
            return PreGameStage;
        case 'picking':
            return PickingStage;
        case 'result':
            return ResultStage;
    }
};

export { selectStageComponent };
