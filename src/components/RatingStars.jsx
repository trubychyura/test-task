import { Star } from '@styled-icons/boxicons-solid/Star';
import styled from 'styled-components';

const StyledStar = styled(Star)`
  color: silver;
  cursor: pointer;
  transition: color 200ms;

  :hover {
    color: gold;
  }
`;

const StyledContainer = styled('div')`
  display: flex;
`;

const RatingStars = () => {
  return (
    <StyledContainer>
      <StyledStar size='25' />
      <StyledStar size='25' />
      <StyledStar size='25' />
      <StyledStar size='25' />
      <StyledStar size='25' />
    </StyledContainer>
  );
};

export default RatingStars;
