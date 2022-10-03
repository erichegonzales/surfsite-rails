import { Card, CardGroup } from "react-bootstrap";

function Comment({ item, email, comment }) {
  return (
    <CardGroup>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>id: {item.id} </Card.Title>
          <Card.Subtitle>email: {item.email}</Card.Subtitle>
          <Card.Text>comment: {item.comment}</Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default Comment;
