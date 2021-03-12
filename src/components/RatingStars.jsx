import { useState } from 'react';
import { Star } from '@styled-icons/boxicons-solid/Star';
import { StarHalf } from '@styled-icons/boxicons-solid/StarHalf';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';

const StyledStar = styled(Star)`
  cursor: pointer;
  transition: color 200ms;

  ${({ value, rating, hover }) =>
    value <= (hover || rating) ? `color:  gold;` : `color: silver;`}
`;

const StyledRadio = styled(Form.Check)`
  display: none;
`;

const StyledContainer = styled(Form.Group)`
  display: flex;
`;

const RatingStars = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  console.log(rating, hover);
  return (
    <StyledContainer>
      {[...Array(5)].map((_, i) => {
        let ratingValue = i + 1;

        return (
          <Form.Label key={i}>
            <StyledRadio
              type='radio'
              name='formRadios'
              id={`formRadio${i}`}
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <StyledStar
              size='25'
              value={ratingValue}
              rating={rating}
              hover={hover}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
          </Form.Label>
        );
      })}
    </StyledContainer>
  );
};

export default RatingStars;
