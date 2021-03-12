import { connect } from 'react-redux';
import { hideModal } from '../redux/modal';
import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap';
import {
  StyledModal,
  StyledImage,
  StyledDescription,
  StyledComments,
  StyledComentHeader,
  StyledForm,
} from '../styled/Modal';

import { RatingStars } from './index';

const Modal = ({ isVisible, data, hideModal }) => {
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
          <h5>Description:</h5>
          <p>
            <span>{data.name}</span>
          </p>
        </StyledDescription>
        <StyledComments lg={12}>
          <h5>Comments:</h5>
          <ListGroup>
            <ListGroup.Item as={Container}>
              <StyledComentHeader>
                <h6>Customer Name</h6>
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
                <h6>Customer Name</h6>
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
          <h5>Rate the product</h5>
          <RatingStars />
          <StyledForm.Group controlId='Form'>
            <StyledForm.Label>Your Comment</StyledForm.Label>
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
