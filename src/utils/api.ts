import { IProduct } from '../types';

export const fetchData = async (): Promise<IProduct[] | null> => {
  const response = await fetch('https://demo8413434.mockable.io/');
  const data = await response.json();
  return data.products;
};
