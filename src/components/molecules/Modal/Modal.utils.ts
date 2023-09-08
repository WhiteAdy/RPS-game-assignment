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

const MODAL_CLOSING_DURATION = 150;

export { BTN_PROPS, MODAL_CLOSING_DURATION };
