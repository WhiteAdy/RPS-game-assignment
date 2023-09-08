type Variant = 'text' | 'filled' | 'outlined';
interface Button extends React.ComponentProps<'button'> {
    variant?: Variant;
}

export type { Variant, Button };
