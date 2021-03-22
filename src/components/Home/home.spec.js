import React from 'react';
import { shallow } from 'enzyme';

import { Home } from './Home';
import { Product } from '..';

const setUp = (props) => shallow(<Home {...props} />);

const mockProducts = [
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

describe('Home component', () => {
  let component;
  beforeEach(() => {
    component = setUp({ products: mockProducts });
  });

  it('should render component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render defined amount of products', () => {
    const wrapper = component.find(Product);
    expect(wrapper).toHaveLength(mockProducts.length);
  });

  describe('useEffect hook', () => {
    let loadData;

    beforeEach(() => {
      jest.spyOn(React, 'useEffect').mockImplementation((f) => f());

      loadData = jest.fn().mockReturnValue(mockProducts);
      component = setUp({ products: [], loadData });
    });

    it('loads the products', () => {
      expect(loadData).toHaveBeenCalled();
    });
  });
});
