import { useState } from 'react';
import { Form } from 'react-bootstrap';
import {
  StyledContainer,
  StyledRadio,
  StyledStar,
} from '../styled/RatingStars';

const RatingStars = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

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
