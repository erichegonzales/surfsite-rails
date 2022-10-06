import { Card, CardGroup, Button } from "react-bootstrap";

const NewsItem = ({ item }) => {
  const handleRedirect = () => {
    window.open(`${item.url}`);
  }

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
          <Button onClick={handleRedirect}>Go to news article</Button>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default NewsItem