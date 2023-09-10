import clsx from 'clsx';
import type { TextField } from './TextField.types';

export default function TextField({ title, fullWidth, ...props }: TextField) {
    return (
        <div className={clsx(['TextField', { fullWidth: Boolean(fullWidth) }])}>
            <h6 className="Title">{title}</h6>
            <input className="Input" {...props} />
        </div>
    );
}
