import type { ChangeEventHandler } from 'react';

interface TextField {
    title: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    maxLength?: number;
    fullWidth?: boolean;
    autoFocus?: boolean;
    className?: string;
}

export type { TextField };
