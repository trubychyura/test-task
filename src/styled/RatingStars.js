import styled from 'styled-components';
import { Star } from '@styled-icons/boxicons-solid/Star';
import { Form } from 'react-bootstrap';

export const StyledStar = styled(Star)`
  cursor: pointer;
  transition: color 200ms;

  ${({ value, rating, hover }) =>
    value <= (hover || rating) ? `color:  gold;` : `color: silver;`}
`;

export const StyledRadio = styled(Form.Check)`
  display: none;
`;

export const StyledContainer = styled(Form.Group)`
  display: flex;
`;
