import { Title } from 'components/atoms';
import { useGameContext } from 'hooks';

export default function CurrentScore() {
    const { gameHistory, currentPlayerName } = useGameContext();
    const recordsExist = Boolean(gameHistory?.[currentPlayerName]);

    const totalPlays = !recordsExist
        ? 0
        : gameHistory![currentPlayerName].wins +
          gameHistory![currentPlayerName].losses +
          gameHistory![currentPlayerName].draws;

    return (
        <div className="CurrentScore">
            <Title text="Current score" />
            {!recordsExist ? (
                <p className="Entry">No games played yet</p>
            ) : (
                <div className="Entries">
                    <p className="Entry">Wins: {gameHistory![currentPlayerName].wins}</p>
                    <p className="Entry">Losses: {gameHistory![currentPlayerName].losses}</p>
                    <p className="Entry">Draws: {gameHistory![currentPlayerName].draws}</p>
                    <p className="Entry">Total plays: {totalPlays}</p>
                </div>
            )}
        </div>
    );
}
