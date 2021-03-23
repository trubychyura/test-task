import { waitFor, cleanup, fireEvent, render } from '@testing-library/react';

import { Form } from './Form';

import { ThemeProvider } from 'styled-components';
import theme from '../../styled/theme';

describe('Form component', () => {
  let wrapper;
  let handleSubmit;

  beforeEach(async () => {
    handleSubmit = jest.fn();
    const props = {
      handleSubmit,
    };

    wrapper = render(
      <ThemeProvider theme={theme}>
        <Form {...props} />
      </ThemeProvider>,
    );
  });

  afterEach(cleanup);

  it('Should trigger errors when form contains invalid values', async () => {
    const form = wrapper.getByTestId('form');

    fireEvent.submit(form);

    await waitFor(() => {
      expect(wrapper.getByText("Product's rate is required!")).not.toBe(null);
      expect(wrapper.getByText('Comment is required!')).not.toBe(null);
    });
  });

  it('Should submit form when form fields contain valid values', async () => {
    const input = wrapper.getByPlaceholderText('Enter comment');
    const radio = wrapper.getByTestId('radio1');
    const form = wrapper.getByTestId('form');

    fireEvent.change(input, { target: { value: 'mock value' } });
    fireEvent.click(radio);
    fireEvent.submit(form);

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalled();
    });
  });
});
