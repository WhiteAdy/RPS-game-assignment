import { useGameAreaContext, useGameContext } from 'hooks';
import { useEffect, useState } from 'react';
import { pickRandomElement } from 'utils';
import { computeScoreType } from './PickingStage.utils';

export default function PickingStage() {
    const [count, setCount] = useState(3);
    const { weapons, addToPlayerScore } = useGameContext();
    const {
        state: { selectedWeapon, computerSelectedWeapon },
        dispatch,
    } = useGameAreaContext();

    useEffect(() => {
        const countdown = setInterval(() => {
            const secondsLeft = count - 1;

            if (secondsLeft <= 0) {
                clearInterval(countdown);

                dispatch({
                    type: 'select-computer-weapon',
                    payload: pickRandomElement(weapons),
                });
            }

            setCount(count - 1);
        }, 1000);

        return () => {
            clearInterval(countdown);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count]);

    useEffect(() => {
        if (count <= 0) {
            const randomlyPickedPlayerWeapon = pickRandomElement(weapons);

            if (!selectedWeapon) {
                dispatch({ type: 'select-weapon', payload: randomlyPickedPlayerWeapon });
            }

            if (selectedWeapon && computerSelectedWeapon) {
                addToPlayerScore(computeScoreType(selectedWeapon, computerSelectedWeapon));
                dispatch({ type: 'change-stage', payload: 'result' });
            }
        }
    }, [addToPlayerScore, weapons, computerSelectedWeapon, count, dispatch, selectedWeapon]);

    return <div className="PickingStage">{count}</div>;
}
