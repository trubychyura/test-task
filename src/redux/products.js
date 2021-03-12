export const LOAD_DATA = 'LOAD_DATA';
export const SET_DATA = 'SET_DATA';

const initialState = {
  products: [],
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DATA:
      return { ...state, products: payload.data };
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

export default productReducer;
