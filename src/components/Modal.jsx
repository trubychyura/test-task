import {
  Button,
  Col,
  Container,
  Form,
  Image,
  ListGroup,
  Modal as BootstrapModal,
  Row,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { hideModal } from '../redux/modal';
import styled from 'styled-components';

import RatingStars from './RatingStars';

const StyledModal = styled(BootstrapModal)`
  .modal-dialog {
    max-width: 50%;
  }
`;

const StyledImage = styled(Image)`
  display: block;
  max-height: 300px;
  margin: auto;
`;

const StyledForm = styled(Form)`
  width: 100%;
`;

const StyledDescription = styled(Col)`
  display: flex;
  flex-direction: column;
  text-align: center;

  h4 {
    flex-grow: 0;
  }

  p {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }

  span {
    display: block;
  }
`;

const StyledComments = styled(Col)`
  padding: 15px;
`;

const StyledComentHeader = styled(Row)`
  margin: 0;
  justify-content: space-between;
`;

const Modal = ({ isVisible, data, hideModal, showModal }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <StyledModal show={isVisible} onHide={hideModal}>
      <StyledModal.Header closeButton>
        <StyledModal.Title>{data.name}</StyledModal.Title>
      </StyledModal.Header>
      <StyledModal.Body as={Row}>
        <Col lg='auto'>
          <StyledImage src={data.img} />
        </Col>
        <StyledDescription>
          <h4>Description:</h4>
          <p>
            <span>{data.name}</span>
          </p>
        </StyledDescription>
        <StyledComments lg={12}>
          <h4>Comments:</h4>
          <ListGroup>
            <ListGroup.Item as={Container}>
              <StyledComentHeader>
                <h5>Customer Name</h5>
                <RatingStars />
              </StyledComentHeader>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
                corporis aliquam, inventore sit maiores asperiores provident
                natus debitis quis commodi officiis impedit ipsam expedita porro
                autem veritatis, sapiente, facilis molestiae!
              </p>
            </ListGroup.Item>
            <ListGroup.Item as={Container}>
              <StyledComentHeader>
                <h5>Customer Name</h5>
                <RatingStars />
              </StyledComentHeader>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
                corporis aliquam, inventore sit maiores asperiores provident
                natus debitis quis commodi officiis impedit ipsam expedita porro
                autem veritatis, sapiente, facilis molestiae!
              </p>
            </ListGroup.Item>
          </ListGroup>
        </StyledComments>
      </StyledModal.Body>
      <StyledModal.Footer>
        <StyledForm>
          <StyledForm.Group controlId='StyledForm'>
            <StyledComentHeader>
              <StyledForm.Label>Your Comment</StyledForm.Label>
              <RatingStars />
            </StyledComentHeader>
            <StyledForm.Control as='textarea' placeholder='Enter comment' />
          </StyledForm.Group>
          <Button variant='primary' type='submit'>
            Send
          </Button>
        </StyledForm>
      </StyledModal.Footer>
    </StyledModal>
  );
};

const mapStateToProps = ({ modal }) => ({
  isVisible: modal.isVisible,
  data: modal.data,
});

export default connect(mapStateToProps, { hideModal })(Modal);
