export default function Instructions() {
    return (
        <div className="Instructions">
            <p className="Title">Instructions:</p>
            <ul className="List">
                <li>
                    Choose your player name, the progress for this name will be saved locally so
                    that you can track your progress in future sessions.
                </li>
                <li>
                    Your current score can be seen on the right side of the screen, along with the
                    leaderboard.
                </li>
                <li>
                    After you click "Begin round" you will have 3 seconds to choose your weapon,
                    otherwise a random one will be chosen for you.
                </li>
                <li>
                    You can add your own weapons and rules! Do that by clicking "Add weapons"
                    button.
                </li>
                <li>You can reset the game progress at any time by clicking the "Reset" button.</li>
            </ul>
        </div>
    );
}
