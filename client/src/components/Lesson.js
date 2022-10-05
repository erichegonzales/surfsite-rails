import { Card, CardGroup, Modal, Button } from "react-bootstrap";
import { ModalBody, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

const Lesson = ({ lesson }) => {
  const [showSuccess, setShowSucess] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleShowSuccess = () => setShowSucess(true);
  const handleCloseSuccess = () => setShowSucess(false);
  const handleShowInfo = () => setShowInfo(true);
  const handleCloseInfo = () => setShowInfo(false);

  const handleInfo = () => {
    handleShowInfo();
  };

  const handleBooking = async () => {
    const res = await fetch(`http://localhost:3001/booked_lessons`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        booked_lesson: {
          date: "",
          time: "",
          user_id: 1,
          lesson_id: lesson.id,
        },
      }),
    });
    const req = await res.json();
    handleShowSuccess();
  };

  return (
    <>
      <CardGroup>
        <Card style={{ width: "25rem" }}>
          <Card.Body>
            <Card.Title>id: {lesson.id} </Card.Title>
            <Card.Img src={lesson.image} onClick={handleInfo}></Card.Img>
            <Card.Text>comment: {lesson.content}</Card.Text>
            <Button onClick={handleBooking}>Book Lesson</Button>
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
            id: {lesson.id}
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
                        src={lesson.image}
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
                      <Card.Text>description: {lesson.content}</Card.Text>
                      <Button onClick={handleBooking}>Book Lesson</Button>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Container>
        </ModalBody>
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
          <Modal.Title id="contained-modal-title-vcenter">Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Check your profile to see your booked lessons.</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Lesson;
