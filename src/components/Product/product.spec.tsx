import { shallow, ShallowWrapper } from 'enzyme';
import { Link } from 'react-router-dom';

import { Product } from '..';
import { ProductProps } from '../../types';

const setUp = (props: ProductProps): ShallowWrapper =>
  shallow(<Product {...props} />);

describe('Product component', () => {
  let component: ShallowWrapper;
  let mockProps: ProductProps;
  beforeEach(() => {
    mockProps = {
      id: 'mock id',
      name: 'mock name',
      img: 'mock img',
    };
    component = setUp(mockProps);
  });

  it('Link should contain proper text', () => {
    const wrapper = component.find(Link);
    expect(wrapper.text()).toEqual(mockProps.name);
  });

  it('should render Product component', () => {
    expect(component).toMatchSnapshot();
  });
});
