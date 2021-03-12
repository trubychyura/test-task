import { connect } from 'react-redux';
import { showModal } from '../redux/modal';

const Product = ({ showModal, data }) => {
  const handleClick = () => {
    showModal(data);
  };

  return (
    <tr onClick={handleClick}>
      <td>{data.name}</td>
    </tr>
  );
};

export default connect(() => ({}), { showModal })(Product);
