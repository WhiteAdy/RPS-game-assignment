import { Modal } from 'components/molecules';
import type { SidebarModal } from '../types';
import { GameCard } from 'components/atoms';
import { useGameContext } from 'hooks';
import type { FormEventHandler } from 'react';
import { useState } from 'react';
import type { WeaponName } from 'contexts';

const REMOVE_WEAPON_FORM_ID = 'RemoveWeaponModalForm';

export default function RemoveWeaponModal({ isOpen, onClose }: SidebarModal) {
    const { weapons, setWeapons } = useGameContext();

    const [selectedWeapons, setSelectedWeapons] = useState<Array<WeaponName>>([]);

    const onClickWeapon = (name: WeaponName) => () => {
        if (selectedWeapons.includes(name)) {
            setSelectedWeapons(selectedWeapons.filter((selectedName) => selectedName !== name));
            // Prevent deleting such as the number of weapons become smaller than 2
        } else if (selectedWeapons.length < weapons.length - 2) {
            setSelectedWeapons([...selectedWeapons, name]);
        }
    };

    const onSubmitForm: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        setWeapons([...weapons.filter(({ name }) => !selectedWeapons.includes(name))]);
        setSelectedWeapons([]);
        onClose?.();
    };

    return (
        <Modal
            title="Remove weapon"
            isOpen={isOpen}
            onClose={onClose}
            acceptBtnProps={{
                disabled: selectedWeapons.length < 1,
                type: 'submit',
                form: REMOVE_WEAPON_FORM_ID,
            }}
        >
            <form
                className="RemoveWeaponModalForm"
                onSubmit={onSubmitForm}
                id={REMOVE_WEAPON_FORM_ID}
            >
                <h6>
                    Choose at least 1 weapon to remove. You can select a number of weapons such as a
                    minimum of 2 cards remain in the game
                </h6>
                <div className="InnerContainer">
                    {weapons.map(({ name, imageUrl }, index) => (
                        <GameCard
                            key={`weaponToRemove-${name}-${index}`}
                            className="WeaponCard"
                            title={name}
                            imgSrc={imageUrl}
                            isSelected={selectedWeapons.includes(name)}
                            onClick={onClickWeapon(name)}
                        />
                    ))}
                </div>
            </form>
        </Modal>
    );
}
