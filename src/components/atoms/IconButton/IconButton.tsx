import clsx from 'clsx';
import type { IconButton } from './IconButton.types';

export default function IconButton({
    iconSrc,
    className,
    type = 'button',
    title = 'Icon button',
    ...props
}: IconButton) {
    return (
        <button
            className={clsx(['IconButton'], { [className!]: className })}
            type={type}
            title={title}
            {...props}
        >
            <img src={iconSrc} alt="" />
        </button>
    );
}
