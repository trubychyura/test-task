import { Formik } from 'formik';
import { RatingStars } from '.';
import { StyledForm, StyledButton, StyledAlert } from '../styled/StyledForm';

const Form = () => (
  <Formik
    initialValues={{
      comment: '',
      rating: null,
    }}
    onSubmit={(props) => {
      console.log(props);
    }}
    validate={({ comment, rating }) => {
      const errors = {};

      if (!comment) {
        errors.comment = 'Comment is required! ';
      }

      if (!rating) {
        errors.rating = "Product's rate is required!";
      }

      return errors;
    }}
  >
    {(formik) => (
      <StyledForm onSubmit={formik.handleSubmit}>
        <StyledForm.Group>
          <StyledForm.Label>Products's rate:</StyledForm.Label>
          <RatingStars name='rating' />

          {formik.errors.rating && (
            <StyledAlert variant='danger'>{formik.errors.rating}</StyledAlert>
          )}
        </StyledForm.Group>
        <StyledForm.Group controlId='formComment'>
          <StyledForm.Label>Your comment:</StyledForm.Label>
          <StyledForm.Control
            as='textarea'
            value={formik.values.comment}
            placeholder='Enter comment'
            name='comment'
            onChange={formik.handleChange}
          />

          {formik.errors.comment && (
            <StyledAlert variant='danger'>{formik.errors.comment}</StyledAlert>
          )}
        </StyledForm.Group>
        <StyledButton variant='primary' type='submit'>
          Send
        </StyledButton>
      </StyledForm>
    )}
  </Formik>
);

export default Form;
