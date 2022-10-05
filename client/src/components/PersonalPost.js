import { Card, CardGroup, Modal, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import EditPost from "./EditPost";
// import Video from "./Video";

const PersonalPost = ({ post }) => {
 const [showSuccess, setShowSucess] = useState(false);
 const [showInfo, setShowInfo] = useState(false);
 const [showEdit, setShowEdit] = useState(false);

 const handleShowSuccess = () => setShowSucess(true);
 const handleCloseSuccess = () => setShowSucess(false);
 const handleShowInfo = () => setShowInfo(true);
 const handleCloseInfo = () => setShowInfo(false);
 const handleShowEdit = () => setShowEdit(true);
 const handleCloseEdit = () => setShowEdit(false);

  const handleInfo = () => {
    handleShowInfo();
  };

  const handleEdit = () => {
    handleCloseInfo();
    handleShowEdit();
  }

  const handleDelete = async () => {
     handleShowSuccess();
     handleCloseInfo();
    const res = await fetch(`http://localhost:3001/users/1/posts/${post.id}`, {
      method: "DELETE",
    });
    const req = await res.json();
  }

  return (
    <>
      <CardGroup>
        <Card style={{ width: "25rem" }} onClick={handleInfo}>
          <Card.Body>
            <Card.Title>id: {post.id} </Card.Title>
            <Card.Img src={post.image}></Card.Img>
            {/* {post.video === null || post.video === "null" ? null : (
              <Video src={post.video} />
            )} */}
            <Card.Text>comment: {post.content}</Card.Text>
            <Card.Text>user: {post.user.username}</Card.Text>
            <Card.Text>location: {post.location}</Card.Text>
            <Card.Text>likes: {post.likes}</Card.Text>
            <Card.Text>description: {post.content}</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

      <Modal
        size="lg"
        show={showInfo}
        onHide={handleCloseInfo}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="info-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            id: {post.id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <CardGroup>
                  <Card style={{ width: "25rem" }}>
                    <Card.Body>
                      <Card.Img
                        src={post.image}
                        onClick={handleInfo}
                      ></Card.Img>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Col>

              <Col>
                <CardGroup>
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Text>description: </Card.Text>
                      <Button onClick={handleEdit}>Edit post</Button>
                      <Button onClick={handleDelete}>Delete post</Button>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
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
            Post deleted!
          </Modal.Title>
        </Modal.Header>
      </Modal>

      <EditPost showEdit={showEdit} handleShowEdit={handleShowEdit} handleCloseEdit={handleCloseEdit} />
    </>
  );
};

export default PersonalPost;
