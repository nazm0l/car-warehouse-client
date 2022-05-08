import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            N&M Automobiles
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/inventory">
                Inventory
              </Nav.Link>
              {user && (
                <>
                  <Nav.Link as={Link} to="/additem">
                    AddItem
                  </Nav.Link>
                  <Nav.Link as={Link} to="/manage">
                    ManageItems
                  </Nav.Link>
                  <Nav.Link as={Link} to="/myitem">
                    MyItems
                  </Nav.Link>
                </>
              )}
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              {user ? (
                <button
                  onClick={logout}
                  className="btn btn-link text-decoration-none text-danger fw-bold"
                >
                  SignOut
                </button>
              ) : (
                <Nav.Link className="text-danger fw-bold" as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
