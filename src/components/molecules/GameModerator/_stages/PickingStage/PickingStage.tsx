import { useGameAreaContext, useGameContext } from 'hooks';
import { useEffect, useState } from 'react';
import { pickRandomElement } from 'utils';

export default function PickingStage() {
    const [secondsLeft, setSecondsLeft] = useState(3);
    const { allWeapons } = useGameContext();
    const {
        state: { selectedWeapon },
        dispatch,
    } = useGameAreaContext();

    useEffect(() => {
        const countdown = setInterval(() => {
            setSecondsLeft((secondsLeft) => secondsLeft - 1);
        }, 1000);

        return () => {
            clearInterval(countdown);
        };
    }, []);

    useEffect(() => {
        if (secondsLeft <= 0) {
            if (!selectedWeapon) {
                dispatch({ type: 'select-weapon', payload: pickRandomElement(allWeapons).name });
            } else {
                dispatch({ type: 'change-stage', payload: 'result' });
            }
        }
    }, [allWeapons, dispatch, secondsLeft, selectedWeapon]);

    return <div className="PickingStage">{secondsLeft}</div>;
}
