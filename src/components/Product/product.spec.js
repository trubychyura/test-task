import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import Product from './Product';

const setUp = (props) => shallow(<Product {...props} />);

describe('Product component', () => {
  let component;
  beforeEach(() => {
    component = setUp({ id: 'mock id' });
  });

  it('Link should contain prover text', () => {
    const name = 'mock text';
    const component = setUp({ name });
    const wrapper = component.find(Link);
    expect(wrapper.text()).toEqual(name);
  });

  it('should render Product component', () => {
    expect(component).toMatchSnapshot();
  });
});
