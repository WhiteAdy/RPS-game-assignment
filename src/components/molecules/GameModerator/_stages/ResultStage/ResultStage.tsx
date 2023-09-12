import { useGameAreaContext } from 'hooks';
import { LABELS, computeResultText } from './ResultsStage.utils';
import { Button, GameCard } from 'components/atoms';
import clsx from 'clsx';
import { useMemo } from 'react';

export default function ResultStage() {
    const {
        state: { selectedWeapon, computerSelectedWeapon },
        dispatch,
    } = useGameAreaContext();

    const resultText = useMemo(
        () => computeResultText(selectedWeapon!, computerSelectedWeapon!),
        [computerSelectedWeapon, selectedWeapon]
    );
    const onClickNewRound = () => dispatch({ type: 'start-new-round', payload: null });

    if (!(selectedWeapon && computerSelectedWeapon))
        return <h6>Player or computer did not select a weapon</h6>;

    return (
        <div className="ResultStage">
            <div className="PicksContainer">
                <div className="Pick">
                    <h6>Your pick</h6>
                    <GameCard title={selectedWeapon!.name} imgSrc={selectedWeapon!.imageUrl} />
                </div>
                <div className="Pick">
                    <h6>Computer's pick</h6>
                    <GameCard
                        title={computerSelectedWeapon.name}
                        imgSrc={computerSelectedWeapon.imageUrl}
                    />
                </div>
            </div>
            <h4
                className={clsx([
                    'ResultsText',
                    {
                        isWin: resultText === LABELS.WIN,
                        isLose: resultText === LABELS.LOSE,
                        isDraw: resultText === LABELS.DRAW,
                    },
                ])}
            >
                {resultText}
            </h4>
            <Button onClick={onClickNewRound}>Begin a new round!</Button>
        </div>
    );
}
