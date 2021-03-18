import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from './redux/store';

it('renders without crashing', () => {
  shallow(
    <Provider store={store}>
      <App />
    </Provider>,
  );
});

it('renders Account header', () => {
  const wrapper = shallow(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  const welcome = <h1>Display Active Users Account Details</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});
