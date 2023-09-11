interface ModalBtnProps extends React.ComponentProps<'button'> {
    label?: string;
    disabled?: boolean;
    hidden?: boolean;
}

interface ModalProps {
    title: string;
    isOpen?: boolean;
    onAccept?: () => void;
    onClose?: () => void;
    acceptBtnProps?: ModalBtnProps;
    closeBtnProps?: ModalBtnProps;
    hideCloseIcon?: boolean;
    children: React.ReactNode;
}

export type { ModalProps, ModalBtnProps };
