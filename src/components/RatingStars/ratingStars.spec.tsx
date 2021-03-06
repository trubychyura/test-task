import { shallow, ShallowWrapper } from 'enzyme';

import { RatingStars } from '..';
import { Field } from 'formik';
import { RatingProps } from '../../types';

const setUp = (props: RatingProps): ShallowWrapper =>
  shallow(<RatingStars {...props} />);

describe('RatingStars component', () => {
  let component: ShallowWrapper;
  beforeEach(() => {
    component = setUp({});
  });

  it('should contain a Field', () => {
    expect(component.find(Field)).toHaveLength(1);
  });

  it('should contain 5 children', () => {
    const component = setUp({ stars: 5 });
    expect(component.children()).toHaveLength(5);
  });

  it('should render component with 5 children', () => {
    const component = setUp({ stars: 5 });
    expect(component).toMatchSnapshot();
  });

  it('should render component with Field', () => {
    expect(component).toMatchSnapshot();
  });
});
