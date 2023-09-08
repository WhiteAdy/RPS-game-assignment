import clsx from 'clsx';
import type { Button } from './Button.types';

export default function Button({
    variant = 'outlined',
    className,
    type = 'button',
    title = 'Button',
    children,
    ...props
}: Button) {
    return (
        <button
            className={clsx(['Button'], {
                [className!]: className,
                outlinedVariant: variant === 'outlined',
                filledVariant: variant === 'filled',
                textVariant: variant === 'text',
            })}
            type={type}
            title={title}
            {...props}
        >
            {children}
        </button>
    );
}
