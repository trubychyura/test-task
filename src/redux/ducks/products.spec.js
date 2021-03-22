import { takeEvery } from 'redux-saga/effects';

import productsReducer, { loadData } from './products';
import {
  LOAD_DATA,
  SET_DATA,
  setData,
  SUBMIT_FORM,
  handleSubmit,
  workerLoadData,
  watcherLoadData,
} from './products';

const mockData = [
  {
    asin: 'B0721KZHWT',
    name:
      'A3 Magnetic Dry Wipe Weekly Planner Whiteboard for Fridge - Handy Week Calendar/Organiser by Plan Smart - Bonus: 3 Quality Dry Erase Markers with Eraser Included',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/71Y4Ogr8BNL._SX679_.jpg',
    comments: [
      {
        text: 'Some comment',
        rating: 4,
      },
    ],
  },
  {
    asin: 'B01HI4E470',
    name:
      'RoLightic 5M Waterproof Led Strip Light, Multi-Color,SMD 5050 150LEDs Color Changing Flexible Led Strip Kit with 44 key Remote Controller + Power Adapter for Home Kitchen Cabinet Car TV Lighting Decoration',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/81GKt-J0kxL._SX425_.jpg',
    comments: [{ text: 'Some comment', rating: 3 }],
  },
  {
    asin: 'B078PG3PLC',
    name:
      'IPX7 Waterproof Bike Light Set-1000 Lumen Mini Bicycle Headlight Free Rear Light-USB Fast Charge High Performance Rechargeable Battery Easy Install & Universal Fit Mount',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/81iRKp0s5JL._SX522_.jpg',
    comments: [{ text: 'Some comment', rating: 5 }],
  },
];

describe('Products', () => {
  describe('Products Reducer', () => {
    it('should return default state', () => {
      const newState = productsReducer(undefined, {});
      expect(newState).toEqual([]);
    });

    it('should return new  products if receiving type SET_DATA', () => {
      const newState = productsReducer(undefined, {
        type: SET_DATA,
        payload: {
          data: mockData,
        },
      });

      expect(newState).toEqual(mockData);
    });

    it('should add new comment to product if receiving type SUBMIT_FORM', () => {
      const mockComment = { rating: 2, text: 'mock comment' };
      const newState = productsReducer(mockData, {
        type: SUBMIT_FORM,
        payload: {
          id: 'B0721KZHWT',
          data: mockComment,
        },
      });

      expect(newState[0].comments).toContain(mockComment);
    });
  });
  describe('Products Saga', () => {
    const genObj = watcherLoadData();

    it('should wait for every LOAD_DATA action and and call wachLoadData', () => {
      const expectedResult = takeEvery(LOAD_DATA, workerLoadData);
      expect(genObj.next().value).toEqual(expectedResult);
    });

    it('should be done on next iteration', () => {
      expect(genObj.next().done).toBeTruthy();
    });
  });

  describe('Products Actions', () => {
    it('should create an action to set data', () => {
      const expectedAction = {
        type: SET_DATA,
        payload: {
          data: mockData,
        },
      };

      expect(setData(mockData)).toEqual(expectedAction);
    });

    it('should create an action to submit form', () => {
      const expectedAction = {
        type: SUBMIT_FORM,
        payload: {
          id: 'id',
          data: {},
        },
      };

      expect(handleSubmit('id', {})).toEqual(expectedAction);
    });

    it('should create an action to load data', () => {
      const expectedAction = {
        type: LOAD_DATA,
      };

      expect(loadData()).toEqual(expectedAction);
    });
  });
});
