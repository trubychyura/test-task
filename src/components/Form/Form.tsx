import { FC } from 'react';
import { connect } from 'react-redux';
import { Formik, FormikProps } from 'formik';
import * as yup from 'yup';

import { RatingStars } from '..';

import { handleSubmit } from '../../redux/ducks/products';
import { FormProps, FormikValues } from '../../types';
import { StyledForm, StyledButton, StyledAlert } from '../../styled/StyledForm';

const initialValues: FormikValues = {
  comment: '',
  rating: 0,
};

export const Form: FC<FormProps> = ({ id, handleSubmit }) => (
  <Formik
    validateOnBlur={true}
    initialValues={initialValues}
    onSubmit={(values, { resetForm }) => {
      handleSubmit(id, { text: values.comment, rating: values.rating });
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
    {(formik: FormikProps<FormikValues>) => (
      <StyledForm onSubmit={formik.handleSubmit} data-testid='form'>
        <StyledForm.Group>
          <StyledForm.Label>Products's rate:</StyledForm.Label>
          <RatingStars name='rating' />
          {formik.errors.rating && formik.touched.rating && (
            <StyledAlert variant='danger'>{formik.errors.rating}</StyledAlert>
          )}
        </StyledForm.Group>
        <StyledForm.Group controlId='formComment'>
          <StyledForm.Label>Your comment:</StyledForm.Label>
          <StyledForm.Control
            value={formik.values.comment}
            as='textarea'
            placeholder='Enter comment'
            name='comment'
            onChange={formik.handleChange}
          />
          {formik.errors.comment && formik.touched.comment && (
            <StyledAlert variant='danger' data-testid='error'>
              {formik.errors.comment}
            </StyledAlert>
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
