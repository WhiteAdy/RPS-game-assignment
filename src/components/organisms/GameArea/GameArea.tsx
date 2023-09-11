import { CardPicker, GameModerator } from 'components/molecules';
import { Title } from 'components/atoms';
import clsx from 'clsx';
import { useGameAreaContext } from 'hooks';

export default function GameArea() {
    const {
        state: { currentStage },
    } = useGameAreaContext();
    return (
        <div className="GameArea">
            <Title className="GameArea_Title" text="Rock Paper Scissors game" centered />
            <GameModerator className="GameArea_GameModerator" />
            <CardPicker
                className={clsx(['GameArea_CardPicker', { show: currentStage === 'picking' }])}
            />
        </div>
    );
}
