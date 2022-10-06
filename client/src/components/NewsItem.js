import { Card, CardGroup } from "react-bootstrap";

const NewsItem = ({ item }) => {
  return (
    <CardGroup>
      <Card style={{ width: "38rem" }}>
        <Card.Body>
          <Card.Title>{item.title} </Card.Title>
          <hr />
          <Card.Img src={item.urlToImage}></Card.Img>
          <br />
          <br />
          <Card.Text>{item.content}</Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default NewsItem