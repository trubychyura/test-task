import { Formik } from 'formik';
import { RatingStars } from '.';
import { StyledForm, StyledButton, StyledAlert } from '../styled/StyledForm';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { handleSubmit } from '../redux/products';

type FormProps = {
  id: string;
  handleSubmit: (id: string, data: any) => void;
};

const Form = ({ id, handleSubmit }: FormProps) => (
  <Formik
    initialValues={{
      comment: '',
      rating: 0,
    }}
    onSubmit={(data, { resetForm }) => {
      handleSubmit(id, { text: data.comment, rating: data.rating });
      resetForm();
    }}
    validationSchema={yup.object({
      comment: yup.string().required('Comment is required!'),
      rating: yup
        .number()
        .moreThan(0, "Product's rate is required!")
        .required("Product's rate is required!"),
    })}
  >
    {(formik) => (
      <StyledForm onSubmit={formik.handleSubmit}>
        <StyledForm.Group>
          <StyledForm.Label>Products's rate:</StyledForm.Label>
          {/* <RatingStars name='rating' /> */}
          {formik.errors.rating && formik.touched.rating && (
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
          {formik.errors.comment && formik.touched.comment && (
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

export default connect(null, { handleSubmit })(Form);
