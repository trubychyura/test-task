import { FC } from 'react';
import { connect } from 'react-redux';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

import { RatingStars, Form } from '.';

import { IState, ModalProps, ParamTypes, IProduct } from '../types';
import {
  StyledModal,
  StyledImage,
  StyledDescription,
  StyledComments,
  StyledComentHeader,
} from '../styled/StyledModal';

const Modal: FC<ModalProps> = ({ products }) => {
  const { id } = useParams<ParamTypes>();
  const history = useHistory();
  const product: IProduct | undefined = products.find(
    (product) => product.asin === id,
  );

  if (!product) {
    return null;
  }

  const hideModal = () => {
    history.push('/');
  };

  return (
    <StyledModal show={Boolean(id)} onHide={hideModal}>
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
                  <h6>Unknown user</h6>
                  <RatingStars stars={comment.rating} />
                </StyledComentHeader>
                <p>{comment.text}</p>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </StyledComments>
      </StyledModal.Body>
      <StyledModal.Footer>
        <Form id={id} />
      </StyledModal.Footer>
    </StyledModal>
  );
};

export default connect(({ products }: IState) => ({ products }))(Modal);
