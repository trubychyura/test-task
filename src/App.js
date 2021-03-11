import { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import styled from 'styled-components';

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
      <StyledTable bordered striped hover>
        <thead>
          <tr>
            <th>List of products</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <Product name={product.name} key={product.asin} />
          ))}
        </tbody>
      </StyledTable>
    </StyledContainer>
  );
}

export default App;
