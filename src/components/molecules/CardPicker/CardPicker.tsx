import { GameCard, Title } from 'components/atoms';
import { useGameAreaContext, useGameContext } from 'hooks';
import type { CardPicker } from './CardPicker.types';
import clsx from 'clsx';
import type { Weapon } from 'contexts';

export default function CardPicker({ className }: CardPicker) {
    const { weapons } = useGameContext();
    const {
        state: { selectedWeapon },
        dispatch,
    } = useGameAreaContext();

    const computeOnClickCard = (weapon: Weapon) => () => {
        dispatch({ type: 'select-weapon', payload: weapon });
    };

    return (
        <div className={clsx(['CardPicker', { [className!]: className }])}>
            <Title text="Choose your weapon!" />
            <div className="CardStack">
                {weapons.map((weapon, index) => (
                    <GameCard
                        key={`GameCard-${weapon.name}-${index}`}
                        title={weapon.name}
                        imgSrc={weapon.imageUrl}
                        isSelected={selectedWeapon?.name === weapon.name}
                        onClick={computeOnClickCard(weapon)}
                    />
                ))}
            </div>
        </div>
    );
}
