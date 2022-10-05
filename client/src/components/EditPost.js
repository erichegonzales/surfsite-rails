import { Form, Modal, Button } from "react-bootstrap";
import { useState } from 'react'

const EditPost = ({ post, showEdit, handleShowEdit, handleCloseEdit }) => {
     const [showSuccess, setShowSucess] = useState(false);

     const handleShowSuccess = () => setShowSucess(true);
     const handleCloseSuccess = () => setShowSucess(false);

    const [formData, setFormData] = useState({
      image: "",
      caption: "",
      location: ""
    });

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    console.log(formData)

     const handlePatch = async (e) => {
       handleCloseEdit();
       handleShowSuccess();
       const newPost = {
         ...formData,
       };

       const res = await fetch(`http://localhost:3001/users/1/posts/${post.id}`, {
         method: "PATCH",
         headers: {
           "Content-Type": "application/json",
           "Accept": "application/json"
         },
         body: JSON.stringify({ post: newPost }),
       });
       const req = res.json();
     };

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
            Edit post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  name="image"
                  placeholder="Image URL"
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Caption</Form.Label>
                <Form.Control
                  type="text"
                  name="caption"
                  placeholder="Caption"
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  name="location"
                  placeholder="Location"
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => handlePatch(e)}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showSuccess}
        onHide={handleCloseSuccess}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Changes saved!
          </Modal.Title>
        </Modal.Header>
      </Modal>
    </>
  );
};

export default EditPost;
