import { useState } from 'react';
import {
  Button,
  Col,
  Container,
  Image,
  Modal as BootstrapModal,
  Row,
} from 'react-bootstrap';
import styled from 'styled-components';

const StyledModal = styled(BootstrapModal)`
  max-width: 80%;
`;

const StyledRow = styled(Row)`
  display: flex;
`;
const StyledCol = styled(Col)`
  width: 100px;
`;

const StyledImage = styled(Image)`
  display: block;
  max-height: 300px;
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
        <StyledModal.Body>
          {/* <Row>
            <Col lg={12}>
              <StyledImage src='https://images-na.ssl-images-amazon.com/images/I/71Y4Ogr8BNL._SX679_.jpg' />
            </Col>
            <Col lg={6}>Description:</Col>
          </Row> */}
          <StyledRow>
            <StyledCol>1 of 2</StyledCol>
            <StyledCol>2 of 2</StyledCol>
          </StyledRow>
          <Container fluid>
            <Row lg={12}>
              <Col xs='auto'>1 of 3</Col>
              <Col xs='auto'>2 of 3</Col>
              <Col xs='auto'>3 of 3</Col>
            </Row>
          </Container>
        </StyledModal.Body>

        <StyledModal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save Changes
          </Button>
        </StyledModal.Footer>
      </StyledModal>
    </>
  );
};

export default Modal;
