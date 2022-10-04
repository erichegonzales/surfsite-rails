import { Card, CardGroup, Modal, Button } from "react-bootstrap";
import { useState } from "react";

const Lesson = ({ lesson }) => {
   const [showSuccess, setShowSucess] = useState(false);

   const handleShowSuccess = () => setShowSucess(true);
   const handleCloseSuccess = () => setShowSucess(false);
  
  const handleBooking = async () => {
    const res = await fetch(`http://localhost:3001/booked_lessons`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        booked_lesson: {
          date: '',
          time: '',
          user_id: 1,
          lesson_id: lesson.id,
        }
      })
    });
    const req = await res.json()
    handleShowSuccess();
  }

  return (
    <>
      <CardGroup>
        <Card style={{ width: "25rem" }}>
          <Card.Body>
            <Card.Title>id: {lesson.id} </Card.Title>
            <Card.Img src={lesson.image}></Card.Img>
            <Card.Text>comment: {lesson.content}</Card.Text>
            <Button onClick={handleBooking}>Book Lesson</Button>
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
            <p>Check your profile to see your booked lessons.</p>
          </Modal.Body>
      </Modal>
    </>
  );
};

export default Lesson;
