import clsx from 'clsx';
import type { GameCard } from './GameCard.types';

export default function GameCard({ title, imgSrc, isSelected = false, onClick }: GameCard) {
    return (
        <button
            type="button"
            className={clsx(['GameCard', { isSelected: isSelected }])}
            onClick={onClick}
        >
            <div className="content">
                <h6 className="title">{title}</h6>
                <img className="image" src={imgSrc} />
            </div>
        </button>
    );
}
