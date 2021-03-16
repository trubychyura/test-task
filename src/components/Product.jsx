import { Link } from 'react-router-dom';

const Product = ({ id, name }) => (
  <tr>
    <td>
      <Link to={`/${id}`}>{name}</Link>
    </td>
  </tr>
);

export default Product;
