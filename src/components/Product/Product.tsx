import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ProductProps } from '../../types';
import { StyledCol, StyledImage, StyledRow } from '../../styled/StyledProduct';

const Product: FC<ProductProps> = ({ id, name, img }) => (
  <StyledRow>
    <StyledCol xs={{ span: 12, order: 'last' }} md={{ order: 'first' }}>
      <Link to={`/${id}`}>{name}</Link>
    </StyledCol>
    <StyledCol xs={{ span: 12, order: 'first' }} md={{ order: 'last' }}>
      <StyledImage src={img} />
    </StyledCol>
  </StyledRow>
);

export default Product;
