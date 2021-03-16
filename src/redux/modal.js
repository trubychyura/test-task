const SHOW_MODAL = 'SHOW_MODAL';
const HIDE_MODAL = 'HIDE_MODAL';

const initialState = {
  isVisible: false,
  id: null,
};

const modalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_MODAL:
      return {
        ...state,
        isVisible: true,
        id: payload.data.asin,
      };
    case HIDE_MODAL:
      return { ...state, isVisible: false, id: null };
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

export const hideModal = () => ({
  type: HIDE_MODAL,
});

export default modalReducer;
