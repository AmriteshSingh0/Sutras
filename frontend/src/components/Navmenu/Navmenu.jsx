import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { LuLogOut } from "react-icons/lu";
import './Navmenu.css';
import { logoutUser } from "../../actions/userAction";
import { useDispatch } from "react-redux";

const Navmenu = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "rgba(255,255,255,0.2)", border: "solid 1px white" }}>
        {/* --- 2. Use 'as={Link}' for all navigation links --- */}
        <Navbar.Brand as={Link} to="/">
          <img src="/images/logo.png" className="logo" style={{ marginLeft: '3rem' }} />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          {/* --- 3. Use 'me-auto' to push all other links to the right --- */}
          <Nav className="me-auto"> 
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/article">Articles</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
          </Nav>

          {/* --- 4. This 'Nav' block will be pushed to the far right --- */}
          <Nav>
            {!currentUser && (
              // Use React.Fragment <> instead of a <div> for clean alignment
              <> 
                <Nav.Link as={Link} to="/login"> &nbsp;&nbsp;Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
              </>
            )}
            {currentUser && (
              <>
                {/* --- 5. HERE IS THE NEW PROFILE LINK --- */}
                <Nav.Link as={Link} to="/profile">
                 Profile
                </Nav.Link>

                <Nav.Link onClick={()=>dispatch(logoutUser())}>
                  Logout <LuLogOut/>
                </Nav.Link>
              </>
            )}
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navmenu;
