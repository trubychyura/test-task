export const LOAD_DATA = 'LOAD_DATA';
export const SET_DATA = 'SET_DATA';
export const SUBMIT_FORM = 'SUBMIT_FORM';

const productReducer = (
  state: IProduct[] = [],
  action: ProductsActionTypes,
): IProduct[] => {
  switch (action.type) {
    case SET_DATA:
      return [...action.payload.data];
    case SUBMIT_FORM:
      return state.map(
        (item: IProduct): IProduct => {
          if (item.asin === action.payload.id) {
            const comments: IComment[] = [
              ...item.comments,
              action.payload.data,
            ];
            return { ...item, comments };
          }

          return item;
        },
      );
    default:
      return state;
  }
};

export const setData = (data: Array<IProduct>): ISetDataAction => ({
  type: SET_DATA,
  payload: {
    data,
  },
});

export const loadData = (): ILoadDataAction => ({
  type: LOAD_DATA,
});

export const handleSubmit = (
  id: string,
  data: IComment,
): IHandleSubmitAction => ({
  type: SUBMIT_FORM,
  payload: {
    data,
    id,
  },
});

export default productReducer;

export type IComment = {
  text: string;
  rating: number;
};

export interface IProduct {
  asin: string;
  name: string;
  img: string;
  comments: IComment[];
  [key: string]: any;
}

interface ISetDataAction {
  type: typeof SET_DATA;
  payload: {
    data: Array<IProduct>;
  };
}

interface IHandleSubmitAction {
  type: typeof SUBMIT_FORM;
  payload: {
    data: IComment;
    id: string;
  };
}

type ProductsActionTypes = ISetDataAction | IHandleSubmitAction;

export interface ILoadDataAction {
  type: typeof LOAD_DATA;
}
