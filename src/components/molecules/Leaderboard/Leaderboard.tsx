import { Title } from 'components/atoms';
import { useGameContext } from 'hooks';
import { Fragment } from 'react';

export default function Leaderboard() {
    const { gameHistory } = useGameContext();

    return (
        <div className="Leaderboard">
            <Title text="Leaderboard" />
            {!gameHistory ? (
                <p className="NoEntriesText">No leaderboard entries yet</p>
            ) : (
                <div className="Grid">
                    <span className="Label">Player</span>
                    <span className="Label">Wins</span>
                    <span className="Label">Losses</span>
                    <span className="Label">Draws</span>
                    {Object.entries(gameHistory).map(
                        ([playerName, { wins, losses, draws }], index) => (
                            <Fragment key={`Leaderboard-${playerName}-${index}`}>
                                <span>{playerName}</span>
                                <span>{wins}</span>
                                <span>{losses}</span>
                                <span>{draws}</span>
                            </Fragment>
                        )
                    )}
                </div>
            )}
        </div>
    );
}
