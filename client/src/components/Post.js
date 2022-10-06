import { Card, CardGroup, Modal, Button } from "react-bootstrap";
import { ModalBody, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { AiFillHeart } from 'react-icons/ai'

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
        <Card
          className="post-card"
          style={{ width: "25rem" }}
          onClick={handleInfo}
        >
          {/* <Card.Header>
            <Card.Title className="post-title">{post.user.username}</Card.Title>
          </Card.Header> */}
          <Card.Body>
            <Card.Img
              xs
              fluid
              roundedCircle
              className="prof-pic"
              src={post.user.image}
            ></Card.Img>
            <Card.Title className="post-title">{`@${post.user.username}`}</Card.Title>
            <hr />
            <Card.Img src={post.image}></Card.Img>
            <hr />
            <Card.Text>
              <AiFillHeart /> {post.likes}
            </Card.Text>
            <Card.Text>{post.location}</Card.Text>
            <Card.Text>{post.caption}</Card.Text>
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
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Post;
