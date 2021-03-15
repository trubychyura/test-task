import { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadData } from './redux/products';

import Modal from './components/Modal';
import Product from './components/Product';
import { StyledContainer, StyledTable } from './styled/StyledApp';

function App({ loadData, products }) {
  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <StyledContainer>
      <Modal />
      <StyledTable bordered striped hover>
        <thead>
          <tr>
            <th>List of products</th>
          </tr>
        </thead>
        <tbody>
          {products.map(({ name, asin, img, comments = [], stars = 0 }) => {
            const data = {
              name,
              asin,
              img,
              comments,
              stars,
            };
            return <Product data={data} key={asin} />;
          })}
        </tbody>
      </StyledTable>
    </StyledContainer>
  );
}

const mapStateToProps = ({ products }) => ({ products: products.products });

export default connect(mapStateToProps, {
  loadData,
})(App);
