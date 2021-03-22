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
    // const input = component.dive().find(StyledForm.Control);
    // console.log(input.debug());
    // input.prop('onChange', {
    //   target: { name: 'comment', value: 'new comment' },
    // });
    // console.log(input.debug());
    // input.simulate('change', {
    //   // you must add this next line as (Formik calls e.persist() internally)
    //   persist: () => {},
    //   // simulate changing e.target.name and e.target.value
    //   target: {
    //     name: 'comment',
    //     value: 'ian',
    //   },
    // });
    // const newValue = input.props();
    // console.log(input.props());
    // expect(newValue.value).toEqual('new comment');
  });
});
