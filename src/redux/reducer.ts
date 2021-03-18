import { combineReducers } from 'redux';

import products from './ducks/products';

const rootReducer = combineReducers({ products });

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
