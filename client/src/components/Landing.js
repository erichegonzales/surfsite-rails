import { Container, Form, Button, Image, Card, CardGroup } from "react-bootstrap";

const Landing = () => {
  return (
    <Container>
      <h1>Welcome to AllThingsSurf</h1>
      <h3>A community where all surfers can connect</h3>
      <Image src="https://i0.heartyhosting.com/www.surfer.com/wp-content/uploads/2019/12/laura.jpg?resize=1200%2C630" />
      <Container>
        <h3>Login</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <h4>or</h4>
        <Button variant="primary" type="submit">
          Create an account
        </Button>
      </Container>

      <CardGroup>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://i.guim.co.uk/img/media/710283e4389eeba6fce47996f4d67484bdbe3a33/0_279_7158_4295/master/7158.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=9dd9ea1f0d66e2bacba4f36cd276912a"
          />
          <Card.Body>
            <Card.Title>Latest News</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://i.guim.co.uk/img/media/710283e4389eeba6fce47996f4d67484bdbe3a33/0_279_7158_4295/master/7158.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=9dd9ea1f0d66e2bacba4f36cd276912a"
          />
          <Card.Body>
            <Card.Title>Latest Posts</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://i.guim.co.uk/img/media/710283e4389eeba6fce47996f4d67484bdbe3a33/0_279_7158_4295/master/7158.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=9dd9ea1f0d66e2bacba4f36cd276912a"
          />
          <Card.Body>
            <Card.Title>Latest Lessons</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default Landing;
