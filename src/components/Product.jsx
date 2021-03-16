import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { showModal } from '../redux/modal';

const Product = ({ showModal, data }) => (
  <tr onClick={() => showModal(data)}>
    <td>
      <Link to={`/${data.asin}`}>{data.name}</Link>
    </td>
  </tr>
);

export default connect(() => ({}), { showModal })(Product);
