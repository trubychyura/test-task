import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ProductProps } from '../types';

const Product: FC<ProductProps> = ({ id, name }) => (
  <tr>
    <td>
      <Link to={`/${id}`}>{name}</Link>
    </td>
  </tr>
);

export default Product;
