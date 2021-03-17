import { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadData } from './redux/products';
import { StyledContainer, StyledTable } from './styled/StyledApp';
import { HashRouter as Router, Route } from 'react-router-dom';

import Modal from './components/Modal';
import Product from './components/Product';

function App({ loadData, products }) {
  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <StyledContainer>
      <Router>
        <Route path='/'>
          <StyledTable bordered striped hover>
            <thead>
              <tr>
                <th>List of products</th>
              </tr>
            </thead>
            <tbody>
              {products.map(({ name, asin }) => (
                <Product id={asin} name={name} key={asin} />
              ))}
            </tbody>
          </StyledTable>
        </Route>
        <Route path='/:id'>
          <Modal />
        </Route>
      </Router>
    </StyledContainer>
  );
}

const mapStateToProps = ({ products }) => ({ products });

export default connect(mapStateToProps, {
  loadData,
})(App);
