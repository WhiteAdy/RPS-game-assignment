import type { PlayerData, Weapon } from 'contexts';

const computeScoreType = (
    selectedWeapon: Weapon,
    computerSelectedWeapon: Weapon
): keyof PlayerData => {
    const {
        name: name1,
        rules: { defeats: defeats1 },
    } = selectedWeapon;
    const {
        name: name2,
        rules: { defeats: defeats2 },
    } = computerSelectedWeapon;

    if (defeats1.includes(name2)) return 'wins';
    if (defeats2.includes(name1)) return 'losses';
    return 'draws';
};

export { computeScoreType };
