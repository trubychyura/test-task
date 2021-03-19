import { shallow } from 'enzyme';

import Product from './Product';
import { StyledRow } from '../../styled/StyledProduct';

const setUp = (props) => shallow(<Product {...props} />);

describe('Product component', () => {
  let component;
  beforeEach(() => {
    component = setUp({ id: 'id' });
  });

  it('should contain StyledRow', () => {
    const wrapper = component.find(StyledRow);
    expect(wrapper.length).toBe(1);
  });

  it('should render Product component', () => {
    expect(component).toMatchSnapshot();
  });
});
