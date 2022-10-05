import { Card, CardGroup, Modal, Button } from "react-bootstrap";
import { ModalBody, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Video from "./Video";

const Post = ({ post }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleShowInfo = () => setShowInfo(true);
  const handleCloseInfo = () => setShowInfo(false);

  const handleInfo = () => {
    handleShowInfo();
  };

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
            <Card.Text>title: {post.title}</Card.Text>
            <Card.Text>user: {post.user.username}</Card.Text>
            <Card.Text>location: {post.location}</Card.Text>
            <Card.Text>likes: {post.likes}</Card.Text>
            <Card.Text>description: {post.caption}</Card.Text>
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
        <ModalBody>
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
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Container>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Post;
