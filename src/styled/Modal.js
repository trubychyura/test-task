import styled from 'styled-components';
import { Col, Form, Image, Modal, Row } from 'react-bootstrap';

export const StyledModal = styled(Modal)`
  .modal-title {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .modal-dialog {
    max-width: 50%;
  }
`;

export const StyledImage = styled(Image)`
  display: block;
  max-height: 300px;
  margin: auto;
`;

export const StyledForm = styled(Form)`
  width: 100%;
`;

export const StyledDescription = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledComments = styled(Col)`
  padding: 15px;
`;

export const StyledComentHeader = styled(Row)`
  margin: 0;
  justify-content: space-between;
`;
