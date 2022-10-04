import { Card, CardGroup, Modal, Button } from "react-bootstrap";
import { useState } from "react";

const BookedLesson = ({ booked_lesson }) => {
  const [showSuccess, setShowSucess] = useState(false);

  const handleShowSuccess = () => setShowSucess(true);
  const handleCloseSuccess = () => setShowSucess(false);

  const handleBooking = async () => {
    const res = await fetch(`http://localhost:3001/users/1/booked_lessons/${booked_lesson.id}`, {
      method: "DELETE",
    });
    const req = await res.json();
    handleShowSuccess();
  };

  return (
    <>
      <CardGroup>
        <Card style={{ width: "25rem" }}>
          <Card.Body>
            <Card.Title>id: {booked_lesson.id} </Card.Title>
            <Card.Img src={booked_lesson.lesson.image}></Card.Img>
            <Card.Text>comment: {booked_lesson.date}</Card.Text>
            <Button onClick={handleBooking}>Cancel Lesson</Button>
          </Card.Body>
        </Card>
      </CardGroup>

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
          <p>Your lesson was removed</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BookedLesson;
