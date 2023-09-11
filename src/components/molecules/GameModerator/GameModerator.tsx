import clsx from 'clsx';
import type { GameModerator } from './GameModerator.types';
import { PickingStage, PreGameStage, ResultStage } from './_stages';
import { useGameAreaContext } from 'hooks';

export default function GameModerator({ className }: GameModerator) {
    const {
        state: { currentStage },
    } = useGameAreaContext();

    const renderStage = () => {
        switch (currentStage) {
            case 'pre-game':
                return <PreGameStage />;
            case 'picking':
                return <PickingStage />;
            case 'result':
                return <ResultStage />;
        }
    };
    return (
        <div className={clsx(['GameModerator', { [className!]: className }])}>{renderStage()}</div>
    );
}
