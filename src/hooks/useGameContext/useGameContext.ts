import type { PlayerData, PlayerName, Weapon, WeaponName, WeaponRules } from 'contexts';
import { DEFAULT_PLAYER_DATA, GameContext } from 'contexts';
import { useContext } from 'react';
import { noop } from 'utils';

export default function useGameContext() {
    const {
        weapons,
        setWeapons,
        currentPlayerName,
        setCurrentPlayerName,
        gameHistory,
        setGameHistory,
        isOpenWelcomeModal,
        setIsOpenWelcomeModal,
    } = useContext(GameContext);

    if (setWeapons === noop)
        throw new Error('Please wrap your component tree in a GameContextProvider!');

    const findWeapon = (weaponName: WeaponName) => weapons.find(({ name }) => name === weaponName);

    const weaponExistsInDB = (weaponName: WeaponName) => Boolean(findWeapon(weaponName));
    const playerExistsInDb = (playerName: PlayerName) => {
        if (!gameHistory) return false;
        return Object.keys(gameHistory).includes(playerName);
    };

    const addCustomWeapon = (newWeapon: Weapon) => {
        if (!weaponExistsInDB(newWeapon.name)) {
            return setWeapons([...weapons, newWeapon]);
        }
        console.warn('Weapon already exists, so no new weapon was added!');
    };

    const editWeaponRules = (weaponName: WeaponName, newRules: WeaponRules) => {
        if (weaponExistsInDB(weaponName)) {
            return setWeapons((existingWeapons) =>
                existingWeapons.map((existingWeapon) => {
                    if (existingWeapon.name !== weaponName) return existingWeapon;
                    return { ...existingWeapon, rules: newRules };
                })
            );
        }
        console.warn('Weapon already exists, so no new weapon was added!');
    };

    const removeCustomWeapon = (weaponName: WeaponName) => {
        if (weaponExistsInDB(weaponName)) {
            return setWeapons(weapons.filter(({ name }) => name !== weaponName));
        }
        console.warn('Could not find this weapon in the db!');
    };

    const registerPlayerName = (playerName: PlayerName) => {
        if (!playerExistsInDb(playerName)) {
            setGameHistory({ ...gameHistory, [playerName]: DEFAULT_PLAYER_DATA });
        }
        return setCurrentPlayerName(playerName);
    };

    const resetPlayerScore = (playerName: PlayerName) => {
        if (playerExistsInDb(playerName)) {
            return setGameHistory({ ...gameHistory, [playerName]: DEFAULT_PLAYER_DATA });
        }
        console.warn('Could not find this player in the db!');
    };

    const addToPlayerScore = (scoreType: keyof PlayerData) => {
        if (gameHistory) {
            const currentPlayerData = gameHistory[currentPlayerName];
            return setGameHistory({
                ...gameHistory,
                [currentPlayerName]: {
                    ...currentPlayerData,
                    [scoreType]: currentPlayerData[scoreType] + 1,
                },
            });
        }
        console.warn('No player exists in the game history yet!');
    };

    const showWelcomeModal = () => setIsOpenWelcomeModal(true);
    const hideWelcomeModal = () => setIsOpenWelcomeModal(false);

    return {
        currentPlayerName,
        weapons,
        gameHistory,
        weaponExistsInDB,
        playerExistsInDb,
        addCustomWeapon,
        removeCustomWeapon,
        registerPlayerName,
        addToPlayerScore,
        showWelcomeModal,
        isOpenWelcomeModal,
        hideWelcomeModal,
        resetPlayerScore,
        editWeaponRules,
        findWeapon,
        setWeapons,
    };
}
