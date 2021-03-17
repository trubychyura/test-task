import styled from 'styled-components';
import { Container, Table } from 'react-bootstrap';

export const StyledContainer = styled(Container)`
  padding: 20px 10px;
`;

export const StyledTable = styled(Table)`
  text-align: center;
  th {
    font-size: 40px;
  }

  tbody tr {
    cursor: pointer;
  }
`;
