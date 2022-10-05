import { Card, CardGroup, Modal, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

const EditPost = ({ showEdit, handleShowEdit, handleCloseEdit }) => {
  return (
    <>
      <Modal
        show={showEdit}
        onHide={handleCloseEdit}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            edit post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
      </Modal>
    </>
  );
};

export default EditPost;
