import { shallow } from 'enzyme';

import { Form } from './Form';
import { Form as BootstrapForm } from 'react-bootstrap';
import { StyledForm } from '../../styled/StyledForm';

import { theme } from '../../styled';

const setUp = (props) => shallow(<Form {...props} />);

describe('Form component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('should render component', () => {
    expect(component.dive()).toMatchSnapshot();
  });

  it('should update Form.Control when it is changed', () => {
    // console.log(component.dive().find(StyledForm.Control).debug());
    // console.log(input.debug());
    // input.prop('onChange', {
    //   target: { name: 'comment', value: 'new comment' },
    // });
    const input = component.dive().find(StyledForm.Control);
    input.simulate('change', {
      persist: () => {},
      target: {
        name: 'comment',
        value: 'new comment',
      },
    });

    const newValue = input.props().value;

    expect(newValue).toEqual('new comment');
  });
});
