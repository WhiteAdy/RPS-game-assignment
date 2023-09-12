type Variant = 'text' | 'filled' | 'outlined';
interface Button extends React.ComponentProps<'button'> {
    variant?: Variant;
    fullWidth?: boolean;
}

export type { Variant, Button };
