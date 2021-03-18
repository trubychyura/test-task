import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ProductProps } from '../types';
import { StyledCol, StyledImage, StyledRow } from '../styled/StyledProduct';

const Product: FC<ProductProps> = ({ id, name, img }) => (
  <StyledRow>
    <StyledCol>
      <Link to={`/${id}`}>{name}</Link>
    </StyledCol>
    <StyledCol>
      <StyledImage src={img} />
    </StyledCol>
  </StyledRow>
);

export default Product;
