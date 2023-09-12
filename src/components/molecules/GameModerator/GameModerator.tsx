import clsx from 'clsx';
import type { GameModerator } from './GameModerator.types';
import { useGameAreaContext } from 'hooks';
import { useMemo } from 'react';
import { selectStageComponent } from './GameModerator.utils';

export default function GameModerator({ className }: GameModerator) {
    const {
        state: { currentStage },
    } = useGameAreaContext();

    const CurrentStage = useMemo(() => selectStageComponent(currentStage), [currentStage]);

    return (
        <div className={clsx(['GameModerator', { [className!]: className }])}>
            <CurrentStage />
        </div>
    );
}
