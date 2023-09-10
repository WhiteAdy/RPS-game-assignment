import type { PlayerData, PlayerName, Weapon, WeaponName } from 'contexts';
import { DEFAULT_PLAYER_DATA, GameContext } from 'contexts';
import { useContext } from 'react';

export default function useGameContext() {
    const {
        defaultWeapons,
        customWeapons,
        setCustomWeapons,
        currentPlayerName,
        setCurrentPlayerName,
        gameHistory,
        setGameHistory,
        isOpenWelcomeModal,
        setIsOpenWelcomeModal,
    } = useContext(GameContext);

    const allWeapons = [...defaultWeapons, ...customWeapons];

    const findWeapon = (weaponName: WeaponName) =>
        allWeapons.find(({ name }) => name === weaponName);

    const weaponExistsInDB = (weaponName: WeaponName) => Boolean(findWeapon(weaponName));
    const playerExistsInDb = (playerName: PlayerName) => {
        if (!gameHistory) return false;
        return Object.keys(gameHistory).includes(playerName);
    };

    const addCustomWeapon = (newWeapon: Weapon) => {
        if (!weaponExistsInDB(newWeapon.name)) {
            return setCustomWeapons([...customWeapons, newWeapon]);
        }
        console.warn('Weapon already exists, so no new weapon was added!');
    };

    const removeCustomWeapon = (weaponName: WeaponName) => {
        if (weaponExistsInDB(weaponName)) {
            return setCustomWeapons(customWeapons.filter(({ name }) => name !== weaponName));
        }
        console.warn('Could not find this weapon in the db!');
    };

    const registerPlayerName = (playerName: PlayerName) => {
        if (!playerExistsInDb(playerName)) {
            console.log('nu exista, facem game history...');
            setGameHistory({ ...gameHistory, [playerName]: DEFAULT_PLAYER_DATA });
        }
        return setCurrentPlayerName(playerName);
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
        allWeapons,
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
    };
}
