import type { ModalBtnProps } from './Modal.types';

const BTN_PROPS: Record<'ACCEPT' | 'CLOSE', ModalBtnProps> = {
    ACCEPT: {
        hidden: false,
        disabled: false,
        label: 'Submit',
    },
    CLOSE: {
        hidden: false,
        disabled: false,
        label: 'Cancel',
    },
};

export { BTN_PROPS };
