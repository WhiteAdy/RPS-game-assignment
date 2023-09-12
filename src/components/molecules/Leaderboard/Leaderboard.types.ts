import type { PlayerData, PlayerName } from 'contexts';

interface PlayerScore extends PlayerData {
    playerName: PlayerName;
    totalScore: number;
}

export type { PlayerScore };
