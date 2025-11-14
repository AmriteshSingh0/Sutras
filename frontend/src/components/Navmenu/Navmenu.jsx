import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LuLogOut } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../actions/userAction";
import "./Navmenu.css";

const Navmenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(null);

  // ✅ Load user from localStorage on mount
  useEffect(() => {
    const userData = localStorage.getItem("currentUser");
    if (userData) {
      setCurrentUser(JSON.parse(userData));
    }
  }, []);

  // ✅ Handle logout and redirect
  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    navigate("/login");
  };

  return (
    <Navbar expand="lg" collapseOnSelect className="nav-glass" fixed="top">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="brand">
          <img src="/images/logo.png" alt="Logo"  className="brand-logo" style={{ width: '80px', height: 'auto' }} />
        </Navbar.Brand>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="navbar-menu" />
        <Navbar.Collapse id="navbar-menu">
          {/* Left Nav Links */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/article">Articles</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
          </Nav>

          {/* Right Nav Links */}
          <Nav>
            {!currentUser ? (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register" className="btn-register">
                  Register
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                <Nav.Link onClick={handleLogout} className="btn-logout">
                  Logout <LuLogOut className="logout-icon" />
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navmenu;
