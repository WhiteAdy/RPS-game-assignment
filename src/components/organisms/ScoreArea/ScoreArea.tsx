import { CurrentScore, Leaderboard } from 'components/molecules';

export default function ScoreArea() {
    return (
        <div className="ScoreArea">
            <CurrentScore />
            <Leaderboard />
        </div>
    );
}
