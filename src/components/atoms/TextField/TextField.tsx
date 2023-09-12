import clsx from 'clsx';
import type { TextField } from './TextField.types';
import { useId } from 'react';

export default function TextField({ title, fullWidth, className, ...props }: TextField) {
    const id = useId();

    return (
        <div
            className={clsx([
                'TextField',
                { fullWidth: Boolean(fullWidth), [className!]: className },
            ])}
        >
            <label htmlFor={id} className="Title">
                {title}
            </label>
            <input className="Input" {...props} id={id} />
        </div>
    );
}
