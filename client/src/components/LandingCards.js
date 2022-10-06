import { CardGroup, Card, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LandingCards = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-cards">
      <hr />
      <br />
      <br />
      <CardGroup>
        <Row>
          <Col>
            <Card style={{ width: "21rem" }} className="landing-card">
              <Card.Img
                variant="top"
                src="https://www.surfertoday.com/images/stories/kai-lenny.jpg"
              />
              <Card.Body>
                <Card.Title>Latest Posts</Card.Title>
                <Card.Text>
                  Check out the community's content from surfers around the
                  globe
                </Card.Text>
                {/* <Button variant="primary" onClick={() => navigate('/posts')}>Go</Button> */}
                <Card.Link href="/posts">
                  <Button>Go</Button>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "21rem" }} className="landing-card">
              <Card.Img
                variant="top"
                src="https://www.surfertoday.com/images/stories/surfinstructor.jpg"
              />
              <Card.Body>
                <Card.Title>Latest Lessons</Card.Title>
                <Card.Text>
                  See the lessons that our best coaches have to offer
                </Card.Text>
                <Card.Link href="/lessons">
                  <Button>Go</Button>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "21rem" }} className="landing-card">
              <Card.Img
                variant="top"
                src="https://i0.heartyhosting.com/www.surfer.com/wp-content/uploads/2017/07/Nazare_PraiaDoNorte_Opener_Grambeau.jpg?resize=1200%2C801&ssl=1"
              />
              <Card.Body>
                <Card.Title>Latest News</Card.Title>
                <Card.Text>
                  Browse the top news articles in the surf community
                </Card.Text>
                <Card.Link href="/news">
                  <Button>Go</Button>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardGroup>
    </div>
  );
};

export default LandingCards;
