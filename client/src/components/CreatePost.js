import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const CreatePost = ({ show, handleClose }) => {
  const [showSuccess, setShowSucess] = useState(false);

  const handleShowSuccess = () => setShowSucess(true);
  const handleCloseSuccess = () => setShowSucess(false);

  const [formData, setFormData] = useState({
    image: "",
    caption: "",
    location: "",
    user_id: 1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePost = async (e) => {
    handleClose();
    handleShowSuccess();

    // const newPost = {
    //   ...formData,
    // };

    console.log(formData.caption)

    const res = await fetch(`http://localhost:3001/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ post: {
        image: formData.image,
        location: formData.location,
        caption: formData.caption,
        likes: 0,
        user_id: 1,
       }})
    });
    const req = res.json();
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create new post
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
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  name="location"
                  placeholder="Location"
                  onChange={(e) => handleChange(e)}
                />

                <Form.Group className="mb-3">
                  <Form.Label>Caption</Form.Label>
                  <Form.Control
                    type="text"
                    name="caption"
                    placeholder="Caption"
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>
              </Form.Group>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => handlePost(e)}>
            Post
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
            Post created!
          </Modal.Title>
        </Modal.Header>
      </Modal>
    </>
  );
};

export default CreatePost;
