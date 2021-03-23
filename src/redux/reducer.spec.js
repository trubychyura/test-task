import rootReducer from './store';
import products from './ducks/products';

describe('rootReducer', () => {
  it('initial state of rootReducer matches', () => {
    expect(rootReducer.getState().products).toEqual(products(undefined, {}));
  });
});
