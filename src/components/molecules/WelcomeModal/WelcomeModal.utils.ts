import type { ModalBtnProps } from 'components/molecules';

const FORM_ID = 'PlayerNameForm';

const DEFAULT_MODAL_BTN_PROPS: Record<'ACCEPT' | 'CLOSE', ModalBtnProps> = {
    ACCEPT: {
        label: 'Start playing!',
        form: FORM_ID,
    },
    CLOSE: {
        hidden: true,
    },
};

export { FORM_ID, DEFAULT_MODAL_BTN_PROPS };
