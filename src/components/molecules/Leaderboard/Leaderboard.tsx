import { Title } from 'components/atoms';
import { useGameContext } from 'hooks';
import { Fragment } from 'react';
import type { PlayerScore } from './Leaderboard.types';

export default function Leaderboard() {
    const { gameHistory } = useGameContext();

    const playerScoresSorted: Array<PlayerScore> | null = gameHistory
        ? Object.entries(gameHistory)
              .map(([playerName, { wins, losses, draws }]) => ({
                  playerName,
                  wins,
                  losses,
                  draws,
                  totalScore: wins * 2 - losses + draws,
              }))
              .sort((a, b) => b.totalScore - a.totalScore)
        : null;

    return (
        <div className="Leaderboard">
            <Title text="Leaderboard" />
            {!playerScoresSorted ? (
                <p className="NoEntriesText">No leaderboard entries yet</p>
            ) : (
                <div className="Grid">
                    <span className="Label">Player</span>
                    <span className="Label">Wins</span>
                    <span className="Label">Losses</span>
                    <span className="Label">Draws</span>
                    {playerScoresSorted.map(({ playerName, wins, losses, draws }, index) => (
                        <Fragment key={`Leaderboard-${playerName}-${index}`}>
                            <span>{playerName}</span>
                            <span>{wins}</span>
                            <span>{losses}</span>
                            <span>{draws}</span>
                        </Fragment>
                    ))}
                </div>
            )}
        </div>
    );
}
