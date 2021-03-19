import { shallow, mount, render } from 'enzyme';
// import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from '../../redux/store';
import { theme } from '../../styled';
import RatingStars from './RatingStars';

const setUp = (props) => shallow(<RatingStars {...props} />);

describe('RatingStars component', () => {
  it('should render component with rating', () => {
    const component = setUp();
    expect(component).toMatchSnapshot();
  });

  it('should render component without rating and with name', () => {
    const component = setUp({ stars: 5 });
    expect(component).toMatchSnapshot();
  });
});
