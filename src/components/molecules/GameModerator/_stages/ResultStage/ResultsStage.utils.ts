import type { Weapon } from 'contexts';

const LABELS = {
    WIN: 'You win!',
    LOSE: 'You lose!',
    DRAW: "It's a draw!",
} as const;

const computeResultText = (selectedWeapon: Weapon, computerSelectedWeapon: Weapon) => {
    const {
        name: name1,
        rules: { defeats: defeats1 },
    } = selectedWeapon;
    const {
        name: name2,
        rules: { defeats: defeats2 },
    } = computerSelectedWeapon;

    if (defeats1.includes(name2)) return LABELS.WIN;
    if (defeats2.includes(name1)) return LABELS.LOSE;
    return LABELS.DRAW;
};

export { LABELS, computeResultText };
