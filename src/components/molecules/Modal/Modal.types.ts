interface ModalBtnProps {
    label?: string;
    disabled?: boolean;
    hidden?: boolean;
}

interface Modal {
    title: string;
    isOpen?: boolean;
    onAccept?: () => void;
    onClose?: () => void;
    acceptBtnProps?: ModalBtnProps;
    closeBtnProps?: ModalBtnProps;
    hideCloseIcon?: boolean;
    children: React.ReactNode;
}

type InternalModalStatus = 'open' | 'isClosing' | 'closed';

export type { Modal, ModalBtnProps, InternalModalStatus };
