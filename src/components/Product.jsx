import { connect } from 'react-redux';
import { showModal } from '../redux/modal';

const Product = ({ showModal, data }) => (
  <tr onClick={() => showModal(data)}>
    <td>{data.name}</td>
  </tr>
);

export default connect(() => ({}), { showModal })(Product);
