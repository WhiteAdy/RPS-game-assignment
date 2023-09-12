import { CardPicker, GameModerator } from 'components/molecules';
import { Title } from 'components/atoms';
import clsx from 'clsx';
import { useGameAreaContext, useGameContext } from 'hooks';
import { Sidebar } from '..';

export default function GameArea() {
    const {
        state: { currentStage },
    } = useGameAreaContext();
    const { currentPlayerName } = useGameContext();

    return (
        <div className="GameArea">
            <div className="GameArea_TopContainer">
                <Title
                    className="GameArea_TopContainer_Title"
                    text="Rock Paper Scissors game"
                    centered
                />
                {currentPlayerName && (
                    <div className="PlayerName">
                        <span>Player's name:</span>
                        <span className="PlayerName_Value">{currentPlayerName}</span>
                    </div>
                )}
            </div>
            <Sidebar className="GameArea_Sidebar" />
            <GameModerator className="GameArea_GameModerator" />
            <CardPicker
                className={clsx(['GameArea_CardPicker', { show: currentStage === 'picking' }])}
            />
        </div>
    );
}
