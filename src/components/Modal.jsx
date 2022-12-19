import React from 'react';
import { Modal, Dropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const ModalComponent = ({
  show, showFxn, children, title,
}) => (
  <Modal size="lg" show={show} onHide={() => showFxn(false)}>
    <Modal.Header closeButton style={{ border: 'none' }}>
      <Modal.Title className="fw-bold">
        {title}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>{children}</Modal.Body>
  </Modal>
);

export const XlModalComponent = ({
  show, showFxn, children, title,
}) => (
  <Modal size="xl" show={show} onHide={() => showFxn(false)}>
    <Modal.Header closeButton style={{ border: 'none' }}>
      <Modal.Title className="fw-bold">
        {title}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>{children}</Modal.Body>
  </Modal>
);

export const EditDeleteModal = ({
  deleteAction, editAction,
}) => (
  <Dropdown>
    <Dropdown.Toggle variant="secondary" id="dropdown-basic" />
    <Dropdown.Menu>
      <Dropdown.Item onClick={editAction}>Edit</Dropdown.Item>
      <Dropdown.Item onClick={deleteAction}>Delete</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

ModalComponent.propTypes = {
  show: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  showFxn: PropTypes.func.isRequired,
};

XlModalComponent.propTypes = {
  show: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  showFxn: PropTypes.func.isRequired,
};

EditDeleteModal.propTypes = {
  editAction: PropTypes.func.isRequired,
  deleteAction: PropTypes.func.isRequired,
};
