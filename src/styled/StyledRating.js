import styled from 'styled-components';
import { Star } from '@styled-icons/boxicons-solid/Star';
import { Form } from 'react-bootstrap';

export const StyledStar = styled(Star)`
  cursor: pointer;
  transition: color 200ms;
  width: 25px;
  heidth: 25px;

  ${({ value, rating, hover }) =>
    value <= (hover || rating) ? `color: gold;` : `color: silver;`}

  @media (max-width: 580px) {
    width: 18px;
    heidht: 18px;
  }
`;

export const StyledRadio = styled(Form.Check)`
  display: none;
`;

export const StyledContainer = styled('div')`
  display: flex;
`;
