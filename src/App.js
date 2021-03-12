import { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { loadData } from './redux/products';

import Modal from './components/Modal';
import Product from './components/Product';

const StyledContainer = styled(Container)`
  padding: 20px 10px;
`;

const StyledTable = styled(Table)`
  text-align: center;
  th {
    font-size: 40px;
  }

  tbody tr {
    cursor: pointer;
  }
`;

function App({ loadData, products }) {
  useEffect(() => {
    loadData();
    console.log('loading...');
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
          {products.map(({ name, asin, img, comments = [] }) => {
            const data = {
              name,
              asin,
              img,
              comments,
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
