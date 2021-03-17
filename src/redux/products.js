export const LOAD_DATA = 'LOAD_DATA';
export const SET_DATA = 'SET_DATA';
export const SUBMIT_FORM = 'SUBMIT_FORM';

const initialState = [];

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DATA:
      return [...state, ...payload.data];
    case SUBMIT_FORM:
      return state.map((item) => {
        if (item.asin === payload.id) {
          const comments = [...item.comments, payload.data];
          return { ...item, comments };
        }

        return item;
      });
    default:
      return state;
  }
};

export const setData = (data) => ({
  type: SET_DATA,
  payload: {
    data,
  },
});

export const loadData = () => ({
  type: LOAD_DATA,
});

export const handleSubmit = (id, data) => ({
  type: SUBMIT_FORM,
  payload: {
    data,
    id,
  },
});

export default productReducer;
