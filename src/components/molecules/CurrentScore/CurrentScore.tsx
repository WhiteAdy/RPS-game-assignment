import { Title } from 'components/atoms';
import { useGameContext } from 'hooks';

export default function CurrentScore() {
    const { gameHistory, currentPlayerName } = useGameContext();

    return (
        <div className="CurrentScore">
            <Title text="Current score" />
            {!gameHistory?.[currentPlayerName] ? (
                <p className="Entry">No games played yet</p>
            ) : (
                <div className="Entries">
                    <p className="Entry">Wins: {gameHistory[currentPlayerName].wins}</p>
                    <p className="Entry">Losses: {gameHistory[currentPlayerName].losses}</p>
                    <p className="Entry">Draws: {gameHistory[currentPlayerName].draws}</p>
                    <p className="Entry">
                        Total plays: {gameHistory[currentPlayerName].totalPlays}
                    </p>
                </div>
            )}
        </div>
    );
}
