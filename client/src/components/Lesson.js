import { Card, CardGroup, Modal, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

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
    handleShowSuccess();
    handleCloseInfo();
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
  };

  return (
    <>
      <CardGroup>
        <Card style={{ width: "25rem" }}>
          <Card.Body onClick={handleInfo}>
            <Card.Title>{lesson.title} </Card.Title>
            <hr />
            <Card.Img src={lesson.image}></Card.Img>
            <hr />
            <Card.Text>{lesson.description}</Card.Text>
            <Card.Text>
              {lesson.avg_rating} <AiFillStar />
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Button className="book-btn" size="lg" onClick={handleBooking}>
              Book Lesson
            </Button>
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
          {/* <Modal.Title id="contained-modal-title-vcenter">
            {lesson.title}
          </Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <CardGroup>
                  <Card style={{ width: "45rem" }}>
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
                  <Card style={{ width: "15rem" }}>
                    <Card.Body>
                      <Card.Text>{lesson.title}</Card.Text>
                      <hr/>
                      <Card.Text>{lesson.description}</Card.Text>
                      <Card.Text>
                        {lesson.avg_rating} <AiFillStar />
                      </Card.Text>
                      <Button size="lg" onClick={handleBooking}>
                        Book Lesson
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
            Lesson booked!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Check your profile to see your booked lessons.</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Lesson;
