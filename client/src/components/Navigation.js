import { Nav, Navbar, NavDropdown, Container, Button } from "react-bootstrap";
import { GiSurfBoard } from "react-icons/gi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import LoginForm from "./LoginForm";
import { useState } from "react";
import CreatePost from "./CreatePost";
import CreateLesson from "./CreateLesson";
import Logo from "./Logo";

const Navigation = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showPost, setShowPost] = useState(false);
  const [showLesson, setShowLesson] = useState(false);

  const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  const handleShowPost = () => setShowPost(true);
  const handleClosePost = () => setShowPost(false);

  const handleShowLesson = () => setShowLesson(true);
  const handleCloseLesson = () => setShowLesson(false);

  return (
    <>
      <Navbar bg="dark" expand="sm" sticky="top">
        <Container>
          <Navbar.Brand href="/">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/posts">Content</Nav.Link>
              <Nav.Link href="/lessons">Lessons</Nav.Link>
              <Nav.Link href="/news">News</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>

              <NavDropdown
                title={<AiOutlinePlusCircle className="plus-icon" />}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item onClick={handleShowPost}>
                  Create post
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleShowLesson}>
                  Create lesson
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Button variant="primary" onClick={handleShowLogin}>
              Login
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <CreatePost
        show={showPost}
        handleShow={handleShowPost}
        handleClose={handleClosePost}
      />
      <CreateLesson
        show={showLesson}
        handleShow={handleShowLesson}
        handleClose={handleCloseLesson}
      />
      <LoginForm
        show={showLogin}
        handleClose={handleCloseLogin}
        handleShow={handleShowLogin}
      />
    </>
  );
};

export default Navigation;
