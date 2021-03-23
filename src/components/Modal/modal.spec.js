import { shallow } from 'enzyme';
import routeData from 'react-router';

import { Modal } from './Modal';

import theme from '../../styled/theme';

const products = [
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

const setUp = (props) => shallow(<Modal {...props} theme={theme} />);

describe('Form component', () => {
  let component;
  beforeEach(() => {
    jest.spyOn(routeData, 'useParams').mockReturnValue({
      id: 'B0721KZHWT',
    });
    component = setUp({ products });
  });

  it('should render component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should be null', () => {
    expect(setUp({ products: [] }).html()).toBeNull();
  });
});
