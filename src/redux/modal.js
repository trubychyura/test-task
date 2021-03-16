const SHOW_MODAL = 'SHOW_MODAL';
const HIDE_MODAL = 'HIDE_MODAL';
const SUBMIT_FORM = 'SUBMIT_FORM';

const initialState = {
  isVisible: false,
  data: null,
};

const modalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_MODAL:
      return { ...state, data: payload.data, isVisible: true };
    case HIDE_MODAL:
      return { ...state, data: null, isVisible: false };
    case SUBMIT_FORM:
      return { ...state };
    default:
      return state;
  }
};

export const showModal = (data) => ({
  type: SHOW_MODAL,
  payload: {
    data,
  },
});

export const submitForm = (data) => ({
  type: SUBMIT_FORM,
  payload: {
    data,
  },
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});

export default modalReducer;
