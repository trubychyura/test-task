import { FC, useState } from 'react';
import { Field, FieldProps } from 'formik';
import { Form } from 'react-bootstrap';

import { RatingProps } from '../../types';
import {
  StyledContainer,
  StyledRadio,
  StyledStar,
} from '../../styled/StyledRating';

const RatingStars: FC<RatingProps> = ({ name, stars }) => {
  const [hover, setHover] = useState<number | null>(null);

  if (stars) {
    return (
      <StyledContainer>
        {[...Array(5)].map((_, i) => (
          <StyledStar value={i + 1} rating={Math.round(stars || 0)} key={i} />
        ))}
      </StyledContainer>
    );
  }

  return (
    <StyledContainer>
      <Field name={name}>
        {({ field }: FieldProps) =>
          [...Array(5)].map((_, i) => {
            let rating: number = i + 1;

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
                  data-testid={`radio${i}`}
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
