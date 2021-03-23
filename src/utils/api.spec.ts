import fetchMock from 'jest-fetch-mock';

import { fetchData } from './api';

const mockData = { products: [1, 2, 34] };

describe('fetchData function', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('fetchData returns fetched data', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const products = await fetchData();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(products).toEqual(mockData.products);
  });
});
