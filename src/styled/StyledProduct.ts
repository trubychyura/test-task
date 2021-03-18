import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Col, Image, Row } from 'react-bootstrap';

export const StyledImage = styled(Image)`
  max-height: 300px;
  max-width: 100%;
  display: block;
`;

export const StyledCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledRow = styled(Row)`
  border-bottom: 2px solid gray;
  padding: 5px;
`;

export const StyledLink = styled(Link)`
  display: block;
`;
