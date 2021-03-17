import { takeEvery, call, put } from 'redux-saga/effects';
import { LOAD_DATA, setData } from './products';
import { IProduct } from '../types';

const fetchData = async (): Promise<IProduct[]> => {
  const response = await fetch('https://demo8413434.mockable.io/');
  const data = await response.json();
  return data.products;
};

export function* workerLoadData() {
  const data: IProduct[] = yield call(fetchData);

  yield put(setData(data));
}

export function* watchLoadData() {
  yield takeEvery(LOAD_DATA, workerLoadData);
}
