import { useState } from 'react';
import { Form } from 'react-bootstrap';
import {
  StyledContainer,
  StyledRadio,
  StyledStar,
} from '../styled/RatingStars';

const RatingStars = ({ stars }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  if (stars !== undefined) {
    return (
      <StyledContainer>
        {[...Array(5)].map((_, i) => (
          <StyledStar
            value={i + 1}
            rating={Math.round(stars)}
            hover={null}
            key={i}
          />
        ))}
      </StyledContainer>
    );
  }

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
