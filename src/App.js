import { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

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

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://demo8413434.mockable.io/');
      const data = await response.json();

      setProducts(data.products);
    };

    fetchData();
  }, []);

  console.log(products);

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

export default App;
