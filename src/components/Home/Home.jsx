import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Box from "../Box";
import "./Home.css";
import SearchResults from "../SearchResults/SearchResults";
import { FaSearch } from "react-icons/fa";
import Faq from "../Faq/Faq";
import axios from "axios";
import UserCard from "../UserCard/UserCard";

const Home = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Load current user on mount
  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      setCurrentUser(user);
      recommendUsers(user);
    }
  }, []);

  async function recommendUsers(userString) {
    const user = JSON.parse(userString);
    try {
      const collegeName = user.college;
      const { data } = await axios.get(`/api/users/recommend`, {
        params: { collegeName },
      });
      setUsers(data);
      console.log("Recommended Users:", data);
    } catch (error) {
      console.error("Error fetching recommended users:", error);
    }
  }

  return (
    <>
      {currentUser ? (
        <>
          {/* Search Section */}
          <Container style={{ display: "flex", alignItems: "center" }}>
            <input
              type="text"
              placeholder="Ex: Mentor Name, College Name, Tags"
              onChange={(e) => setSearch(e.target.value)}
              className="input-text"
              style={{ margin: "2rem 1rem", width: "85%" }}
            />
            <Button
              type="submit"
              onClick={() => setIsSearched(true)}
              style={{ height: "3rem" }}
            >
              <FaSearch /> Search
            </Button>
          </Container>

          {/* Results / Recommended Profiles */}
          <Container style={{ marginBottom: "15rem" }}>
            {isSearched ? (
              <SearchResults query={search} />
            ) : (
              <Container>
                <h3 className="text-center mb-4">Recommended Profiles</h3>

                {/* 3 cards per row */}
                <Row>
                  {users.map((it, index) => (
                    <Col key={it._id || index} md={4} sm={6} xs={12}>
                      <UserCard item={it} />
                    </Col>
                  ))}
                </Row>
              </Container>
            )}
          </Container>
        </>
      ) : (
        <>
          {/* Hero Section */}
          <Container
            style={{
              margin: "3rem",
              padding: "1rem",
              backgroundImage: "url(bg.png)",
            }}
          >
            <Row>
              <Col md={6} style={{ marginTop: "5rem" }}>
                <h1 style={{ fontSize: "4rem", fontWeight: 800 }}>
                  Connect with your Seniors.
                </h1>
                <h3 style={{ marginTop: "1rem", fontWeight: 600 }}>
                  Welcome to Real World.
                </h3>
                <h3 style={{ fontWeight: 600 }}>Get guidance.</h3>
                <h6>
                  New to Sutra?{" "}
                  <a href="/register" style={{ textDecoration: "none" }}>
                    Join Now
                  </a>
                </h6>
              </Col>
              <Col md={3}>
                <div>
                  <img
                    src="/images/help.png"
                    alt="help"
                    style={{ marginLeft: "7rem", height: "30rem" }}
                  />
                </div>
              </Col>
            </Row>
          </Container>

          {/* Community Section */}
          <div
            style={{
              backgroundColor: "rgba(195,213,255,0.3)",
              padding: "2rem 3rem",
              textAlign: "center",
            }}
          >
            <h3>Explore your College Communities on Sutra</h3>
            <div
              style={{
                display: "inline-flex",
                gap: "1rem",
                padding: "0.4rem 1rem",
                justifyContent: "space-evenly",
              }}
            >
              <Box text={"Discover Exciting Career Opportunities"} />
              <Box text={"Connect with Industry Experts and Alumni"} />
              <Box text={"Stay Updated with Campus Events"} />
            </div>
          </div>

          {/* Mentor Section */}
          <Container style={{ padding: "3rem" }}>
            <Row>
              <Col md={4}>
                <div>
                  <img src="/images/help2.png" alt="mentors" />
                </div>
              </Col>
              <Col style={{ marginTop: "5rem", marginLeft: "10rem" }}>
                <h1 style={{ fontWeight: 800 }}>
                  Share your concerns with the right people.
                </h1>
                <h5>
                  Connect with the right mentors to <br /> find the best
                  solutions for your challenges
                </h5>
                <div style={{ marginLeft: "-1rem", padding: "0.4rem 1rem" }}>
                  <Box text={"Industrial Experts"} />
                  <Box text={"Your Alumni"} />
                  <Box text={"Mentors"} />
                </div>
              </Col>
            </Row>
            <Faq />
          </Container>
        </>
      )}
    </>
  );
};

export default Home;
