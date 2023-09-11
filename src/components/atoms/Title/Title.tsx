import clsx from 'clsx';
import type { Title } from './Title.types';

export default function Title({ text, centered = false, className }: Title) {
    return (
        <h6 className={clsx(['Title', { isCentered: centered, [className!]: className }])}>
            {text}
        </h6>
    );
}
