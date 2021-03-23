import { FC } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Modal, Home } from '..';

import theme from '../../styled/theme';

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Route path='/'>
        <Home />
      </Route>
      <Route path='/:id'>
        <Modal />
      </Route>
    </Router>
  </ThemeProvider>
);

export default App;
