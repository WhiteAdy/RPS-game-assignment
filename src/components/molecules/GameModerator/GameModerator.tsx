import clsx from 'clsx';
import type { GameModerator } from './GameModerator.types';
import { PreGameStage } from './_stages';

export default function GameModerator({ className }: GameModerator) {
    const currentStage = 'pre-game';

    const renderStage = () => {
        switch (currentStage) {
            case 'pre-game':
                return <PreGameStage />;
        }
    };
    return (
        <div className={clsx(['GameModerator', { [className!]: className }])}>{renderStage()}</div>
    );
}
