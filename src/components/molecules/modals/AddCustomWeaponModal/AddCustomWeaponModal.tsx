import { Modal } from 'components/molecules';
import type { SidebarModal } from '../types';
import { GameCard, TextField } from 'components/atoms';
import type { ChangeEvent, FormEventHandler } from 'react';
import { useState } from 'react';
import { useGameContext } from 'hooks';
import type { WeaponName } from 'contexts';

const ADD_WEAPON_FORM_ID = 'AddCustomWeaponForm';

export default function AddCustomWeaponModal({ isOpen, onClose }: SidebarModal) {
    const { weapons, setWeapons } = useGameContext();

    const [newWeaponTitle, setNewWeaponTitle] = useState('');
    const [newWeaponImg, setNewWeaponImg] = useState('');
    const [weaponsToWinAgainst, setWeaponsToWinAgainst] = useState<Array<WeaponName>>([]);
    const [weaponsToLoseAgainst, setWeaponsToLoseAgainst] = useState<Array<WeaponName>>([]);

    const resetForm = () => {
        setNewWeaponTitle('');
        setNewWeaponImg('');
        setWeaponsToWinAgainst([]);
        setWeaponsToLoseAgainst([]);
    };

    const availableWeaponsToWinAgainst = weapons.filter(
        ({ name }) => !weaponsToLoseAgainst.includes(name)
    );

    const availableWeaponsToLoseAgainst = weapons.filter(
        ({ name }) => !weaponsToWinAgainst.includes(name)
    );

    const onChangeWeaponName = (e: ChangeEvent<HTMLInputElement>) => {
        setNewWeaponTitle(e.target.value);
    };

    const onChangeWeaponImg = (e: ChangeEvent<HTMLInputElement>) => {
        setNewWeaponImg(e.target.value);
    };

    const onClickAvailableWeapon = (name: string, winOrLoseAgainst: 'win' | 'lose') => () => {
        const computedGetter =
            winOrLoseAgainst === 'win' ? weaponsToWinAgainst : weaponsToLoseAgainst;

        const computedSetter =
            winOrLoseAgainst === 'win' ? setWeaponsToWinAgainst : setWeaponsToLoseAgainst;

        if (computedGetter.includes(name)) {
            computedSetter(computedGetter.filter((selectedName) => selectedName !== name));
        } else {
            computedSetter([...computedGetter, name]);
        }
    };

    const isSubmitDisabled =
        !newWeaponTitle || weaponsToWinAgainst.length < 1 || weaponsToLoseAgainst.length < 1;

    const onSubmitForm: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        setWeapons([
            ...weapons.map((existingWeapon) => {
                if (!weaponsToLoseAgainst.includes(existingWeapon.name)) return existingWeapon;
                return {
                    ...existingWeapon,
                    rules: {
                        ...existingWeapon.rules,
                        defeats: [...existingWeapon.rules.defeats, newWeaponTitle],
                    },
                };
            }),
            {
                name: newWeaponTitle,
                imageUrl: newWeaponImg,
                rules: { defeats: weaponsToWinAgainst },
            },
        ]);
        resetForm();
        onClose?.();
    };

    return (
        <Modal
            title="Add custom weapon"
            isOpen={isOpen}
            onClose={onClose}
            acceptBtnProps={{
                disabled: isSubmitDisabled,
                type: 'submit',
                form: ADD_WEAPON_FORM_ID,
            }}
        >
            <form className="AddCustomWeaponForm" onSubmit={onSubmitForm} id={ADD_WEAPON_FORM_ID}>
                <div className="NewCardWithInputs">
                    <GameCard
                        className="NewWeaponCard"
                        title={newWeaponTitle}
                        imgSrc={newWeaponImg}
                    />
                    <TextField
                        title="Weapon name"
                        className="Input"
                        value={newWeaponTitle}
                        onChange={onChangeWeaponName}
                        maxLength={10}
                        placeholder="Max. 10 characters"
                    />
                    <TextField
                        title="Weapon image url"
                        className="Input"
                        value={newWeaponImg}
                        onChange={onChangeWeaponImg}
                    />
                </div>
                <div className="OtherWeapons">
                    <h6>Wins against: (*choose at least 1)</h6>
                    <div className="OtherWeaponsContainer">
                        {availableWeaponsToWinAgainst.map(({ name, imageUrl }, index) => (
                            <GameCard
                                key={`weaponToWinAgainst-${name}-${index}`}
                                className="ExistingWeaponCard"
                                title={name}
                                imgSrc={imageUrl}
                                isSelected={weaponsToWinAgainst.includes(name)}
                                onClick={onClickAvailableWeapon(name, 'win')}
                            />
                        ))}
                    </div>
                    <h6>Loses against: (*choose at least 1)</h6>
                    <div className="OtherWeaponsContainer">
                        {availableWeaponsToLoseAgainst.map(({ name, imageUrl }, index) => (
                            <GameCard
                                key={`ExistingWeaponCard-${name}-${index}`}
                                className="ExistingWeaponCard"
                                title={name}
                                imgSrc={imageUrl}
                                isSelected={weaponsToLoseAgainst.includes(name)}
                                onClick={onClickAvailableWeapon(name, 'lose')}
                            />
                        ))}
                    </div>
                </div>
            </form>
        </Modal>
    );
}
