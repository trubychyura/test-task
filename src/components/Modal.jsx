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
import { useHistory, useParams } from 'react-router';

const Modal = ({ products }) => {
  const params = useParams();
  const history = useHistory();
  const product = products.find((product) => product.asin === params.id);

  if (!product) {
    return null;
  }

  const hideModal = () => {
    history.push('/');
  };

  return (
    <StyledModal show={Boolean(params.id)} onHide={hideModal}>
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

export default connect(({ products }) => ({ products }))(Modal);
