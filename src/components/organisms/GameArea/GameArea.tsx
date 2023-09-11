import { CardPicker, GameModerator } from 'components/molecules';
import { Title } from 'components/atoms';

export default function GameArea() {
    return (
        <div className="GameArea">
            <Title className="GameArea_Title" text="Rock Paper Scissors game" centered />
            <GameModerator className="GameArea_GameModerator" />
            <CardPicker className="GameArea_CardPicker" />
        </div>
    );
}
