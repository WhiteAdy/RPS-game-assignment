import { GameCard } from 'components/atoms';
import { useGameContext } from 'hooks';
import type { CardPicker } from './CardPicker.types';
import clsx from 'clsx';

export default function CardPicker({ selectedWeapon, setSelectedWeapon, className }: CardPicker) {
    const { allWeapons } = useGameContext();
    const computeOnClickCard = (weaponName: string) => () => setSelectedWeapon(weaponName);

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
