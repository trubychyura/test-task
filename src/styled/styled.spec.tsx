import { shallow, ShallowWrapper } from 'enzyme';
import 'jest-styled-components';

import theme from './theme';
import { StyledModal } from './StyledModal';
import { StyledStar } from './StyledRating';

type setUpProps = {
  value?: number;
  rating?: number;
  hover?: number;
};
describe('Styled components', () => {
  let component;
  const setUp = (Comp: any, props?: setUpProps): ShallowWrapper =>
    shallow(<Comp {...props} theme={theme} />);

  describe('Styled Modal', () => {
    it('should render Styled Modal', () => {
      expect(setUp(StyledModal)).toMatchSnapshot();
    });
  });

  describe('Styled Star', () => {
    it('should render Styled Star', () => {
      expect(setUp(StyledStar)).toMatchSnapshot();
    });

    it('should render Star with silver color', () => {
      component = setUp(StyledStar, { value: 5, rating: 2 });
      expect(component).toHaveStyleRule('color', theme.color.silver);
    });

    it('should render Star with gold color', () => {
      component = setUp(StyledStar, { value: 2, hover: 5 });
      expect(component).toHaveStyleRule('color', theme.color.gold);
    });
  });
});
