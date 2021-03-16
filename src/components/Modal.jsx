import { connect } from 'react-redux';
import { hideModal } from '../redux/modal';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import {
  StyledModal,
  StyledImage,
  StyledDescription,
  StyledComments,
  StyledComentHeader,
} from '../styled/Modal';

import { RatingStars, Form } from '.';

const Modal = ({ isVisible, id, products, hideModal }) => {
  if (!isVisible) {
    return null;
  }

  const product = products.find((product) => product.asin === id);

  return (
    <StyledModal show={isVisible} onHide={hideModal}>
      <StyledModal.Header closeButton>
        <StyledModal.Title>{product.name}</StyledModal.Title>
      </StyledModal.Header>
      <StyledModal.Body as={Row}>
        <Col lg='auto'>
          <StyledImage src={product.img} />
        </Col>
        <StyledDescription>
          <h5>Description:</h5>
          <p>
            <span>{product.name}</span>
          </p>
        </StyledDescription>
        <StyledComments lg={12}>
          <h5>Comments:</h5>
          <ListGroup>
            {product.comments.map((comment, i) => (
              <ListGroup.Item as={Container} key={i}>
                <StyledComentHeader>
                  <h6>{comment.user || 'Unknown user'}</h6>
                  <RatingStars stars={comment.rating} />
                </StyledComentHeader>
                <p>{comment.text}</p>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </StyledComments>
      </StyledModal.Body>
      <StyledModal.Footer>
        <Form />
      </StyledModal.Footer>
    </StyledModal>
  );
};

export default connect(
  ({ modal, products }) => ({
    isVisible: modal.isVisible,
    id: modal.id,
    products,
  }),
  { hideModal },
)(Modal);
