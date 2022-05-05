/* eslint-disable  react/prop-types */

import React from 'react';
import { Modal } from 'react-bootstrap';

const ModalComponent = ({
  show, showFxn, children, title,
}) => (
  <Modal size="lg" show={show} onHide={() => showFxn(false)}>
    <Modal.Header closeButton>
      <Modal.Title id="example-modal-sizes-title-lg">
        Create New
        {' '}
        {title}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>{children}</Modal.Body>
  </Modal>
);

export default ModalComponent;
