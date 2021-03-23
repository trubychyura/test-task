import styled from 'styled-components';
import { Col, Image, Modal, Row } from 'react-bootstrap';

export const StyledModal = styled(Modal)`
  @media (max-width: ${({ theme }) => theme.media.md}) {
    padding: 0 !important;
  }

  .modal-title {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .modal-dialog {
    max-width: 60%;
    @media (max-width: ${({ theme }) => theme.media.lg}) {
      max-width: 70%;
    }
    @media (max-width: ${({ theme }) => theme.media.md}) {
      max-width: 90%;
      margin: auto;
    }
  }
`;

export const StyledImage = styled(Image)`
  display: block;
  max-height: 300px;
  max-width: 100%;
  margin: auto;
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
