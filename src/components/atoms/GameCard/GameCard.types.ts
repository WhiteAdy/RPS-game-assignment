interface GameCard {
    title: string;
    imgSrc: string;
    onClick?: () => void;
    isSelected?: boolean;
}

export type { GameCard };
