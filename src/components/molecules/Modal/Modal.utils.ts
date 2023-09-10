import type { ModalBtnProps } from './Modal.types';

const BTN_PROPS = {
    ACCEPT: {
        hidden: false,
        disabled: false,
        label: 'Submit',
    } as ModalBtnProps,
    CLOSE: {
        hidden: false,
        disabled: false,
        label: 'Cancel',
    } as ModalBtnProps,
};

export { BTN_PROPS };
