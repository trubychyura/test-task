import { useState } from 'react';
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

const Modal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Launch demo modal
      </Button>

      <StyledModal show={show} onHide={handleClose}>
        <StyledModal.Header closeButton>
          <StyledModal.Title>Name</StyledModal.Title>
        </StyledModal.Header>
        <StyledModal.Body as={Row}>
          <Col lg='auto'>
            <StyledImage src='https://images-na.ssl-images-amazon.com/images/I/71Y4Ogr8BNL._SX679_.jpg' />
          </Col>
          <StyledDescription>
            <h4>Description:</h4>
            <p>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam culpa libero repellendus autem corporis quas unde est
                tenetur nemo eos eum, sit dicta labore iure facilis. Esse quo
                labore illum!
              </span>
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
                  natus debitis quis commodi officiis impedit ipsam expedita
                  porro autem veritatis, sapiente, facilis molestiae!
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
                  natus debitis quis commodi officiis impedit ipsam expedita
                  porro autem veritatis, sapiente, facilis molestiae!
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
    </>
  );
};

export default Modal;
