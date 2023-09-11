import { CardPicker, GameModerator } from 'components/molecules';
import { Title } from 'components/atoms';
import { useGameAreaContext } from 'hooks';

export default function GameArea() {
    const {
        state: { selectedWeapon },
        dispatch,
    } = useGameAreaContext();

    return (
        <div className="GameArea">
            <Title className="GameArea_Title" text="Rock Paper Scissors game" centered />
            <GameModerator className="GameArea_GameModerator" />
            <CardPicker className="GameArea_CardPicker" {...{ selectedWeapon, dispatch }} />
        </div>
    );
}
