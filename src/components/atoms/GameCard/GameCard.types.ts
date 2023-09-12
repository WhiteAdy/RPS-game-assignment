interface GameCard {
    title?: string;
    imgSrc?: string;
    onClick?: () => void;
    isSelected?: boolean;
    className?: string;
}

export type { GameCard };
