import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Field } from 'formik';

import {
  StyledContainer,
  StyledRadio,
  StyledStar,
} from '../styled/RatingStars';

const RatingStars = ({ stars, name }) => {
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
      <Field name={name}>
        {({ field }) =>
          [...Array(5)].map((_, i) => {
            let rating = i + 1;
            return (
              <Form.Label htmlFor={`formRadio${i}`} key={i}>
                <StyledStar
                  value={rating}
                  rating={field.value}
                  hover={hover}
                  onMouseEnter={() => setHover(rating)}
                  onMouseLeave={() => setHover(0)}
                />
                <StyledRadio
                  type='radio'
                  id={`formRadio${i}`}
                  {...field}
                  value={rating}
                  checked={rating === field.value}
                />
              </Form.Label>
            );
          })
        }
      </Field>
    </StyledContainer>
  );
};

export default RatingStars;
