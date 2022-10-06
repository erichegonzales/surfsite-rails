import { Container, Form, Button, Image, Card, CardGroup, Row, Col } from "react-bootstrap";
import LandingCards from "./LandingCards";

const Landing = () => {
  return (
    <>
      <div className="landing-div">
        <div className="landing-bg-img"></div>
        <div className="landing-welcome">
          <div className="welcome-to">
            <h1> Welcome to</h1>
            <h1> AllThingSurf</h1>
          </div>
          <h3 className="blurb">A community where all surfers can connect</h3>
        </div>
        <div className="landing-login">
          <div className="login-box">
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
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
        <span className="landing-create">
          <h4 className="or">· or ·  </h4>
          <Button variant="primary" type="submit">
            Create an account
          </Button>
        </span>
      </div>
      <LandingCards />
    </>
  );
};

export default Landing;
