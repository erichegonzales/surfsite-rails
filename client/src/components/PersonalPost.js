import { Card, CardGroup, Modal, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import EditPost from "./EditPost";
import { AiFillHeart } from "react-icons/ai";
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
        <Card
          className="post-card"
          style={{ width: "25rem" }}
          onClick={handleInfo}
        >
          <Card.Body>
            <Card.Img src={post.image}></Card.Img>
            {/* <Card.Text>{post.caption}</Card.Text> */}
          </Card.Body>
        </Card>
      </CardGroup>

      <Modal
        size="xl"
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
            {`@${post.user.username}`}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <CardGroup>
                  <Card style={{ width: "45rem" }}>
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
                  <Card style={{ width: "15rem" }}>
                    <Card.Body>
                      <Card.Text>
                        <AiFillHeart />
                        {post.likes}
                      </Card.Text>
                      <Card.Text>{post.caption}</Card.Text>
                      <Button size="lg" onClick={handleEdit}>
                        Edit post
                      </Button>
                      <Button size="lg" onClick={handleDelete}>
                        Delete post
                      </Button>
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

      <EditPost
        post={post}
        showEdit={showEdit}
        handleShowEdit={handleShowEdit}
        handleCloseEdit={handleCloseEdit}
      />
    </>
  );
};

export default PersonalPost;
