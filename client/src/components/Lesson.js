import { Card, CardGroup, Modal, Button } from "react-bootstrap";
import { useState } from "react";

const Lesson = ({ lesson }) => {
  
  const handleBooking = () => {
    console.log('worked')
  }

  return (
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
  );
};

export default Lesson;
