import { Card, CardGroup, Modal, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const BookedLesson = ({ booked_lesson }) => {
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
    const res = await fetch(`http://localhost:3001/users/1/booked_lessons/${booked_lesson.id}`, {
      method: "DELETE",
    });
    const req = await res.json();
  };

  return (
    <>
      <CardGroup>
        <Card style={{ width: "25rem" }}>
          <Card.Body onClick={handleInfo}>
            <Card.Title>{booked_lesson.title} </Card.Title>
            <hr />
            <Card.Img src={booked_lesson.image}></Card.Img>
            <hr />
            <Card.Text>{booked_lesson.description}</Card.Text>
            <Card.Text>
              {booked_lesson.avg_rating} <AiFillStar />
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Button size="lg" onClick={handleBooking}>
              Cancel Lesson
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
          <Modal.Title id="contained-modal-title-vcenter">
            id: {booked_lesson.id}
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
                        src={booked_lesson.lesson.image}
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
                        description: {booked_lesson.content}
                      </Card.Text>
                      <Button size="lg" onClick={handleBooking}>
                        Cancel Lesson
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
            Lesson cancelled!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Check the lessons page to book more lessons.</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BookedLesson;
