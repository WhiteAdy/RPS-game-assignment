import { GameCard } from 'components/atoms';
import { useGameAreaContext, useGameContext } from 'hooks';
import type { CardPicker } from './CardPicker.types';
import clsx from 'clsx';
import type { WeaponName } from 'contexts';

export default function CardPicker({ className }: CardPicker) {
    const { allWeapons } = useGameContext();
    const {
        state: { selectedWeapon },
        dispatch,
    } = useGameAreaContext();

    const computeOnClickCard = (weaponName: WeaponName) => () => {
        dispatch({ type: 'select-weapon', payload: weaponName });
    };

    return (
        <div className={clsx(['CardPicker', { [className!]: className }])}>
            {allWeapons.map(({ name, imageUrl }, index) => (
                <GameCard
                    key={`GameCard-${name}-${index}`}
                    title={name}
                    imgSrc={imageUrl}
                    isSelected={selectedWeapon === name}
                    onClick={computeOnClickCard(name)}
                />
            ))}
        </div>
    );
}
