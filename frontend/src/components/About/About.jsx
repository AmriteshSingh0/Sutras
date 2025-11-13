import React from "react";
import "./About.css"; // Optional: Include custom styles
import {Row,Col, Container} from "react-bootstrap";


const About = () => {
  return (
    <div className="about-me-container">
      <Container style={{marginTop:'3rem', textAlign:'left', marginBottom:'10rem'}}>

      
      <h1>About Sutra</h1>
      <Row>
      <section className="about-collegence" style={{marginTop:'2.5rem'}}>
        <h2 >What is Sutra?</h2>
        <p>
          Sutrais an online guide portal designed to help students
          navigate through college life by providing expert guidance,
          mentorship, and resources. Whether it's academic advice, career
          planning, or extracurricular activities, Sutraconnects juniors
          with experienced seniors to foster a supportive community.
        </p>
      </section>
      </Row>

      <section className="about-creator" style={{marginTop:'2.5rem'}}>
        <h2>About the Creator</h2>
        <p>
          Hi, We are team JDTS OG, the developer behind Sutra. As a student who
          has experienced the ups and downs of college life, I wanted to create
          a platform where students can find answers to their questions and
          receive advice from those who have already walked the path. My
          background in web development has enabled me to design and build this
          portal to serve as a bridge between students and their mentors.
        </p>
      </section>

      <section className="mission" style={{marginTop:'2.5rem'}}>
        <h2>Our Mission</h2>
        <p>
          Our mission is to make college life easier by offering guidance and
          support through a reliable network of peers and seniors. By
          encouraging collaboration and communication, we aim to empower
          students to achieve their goals and navigate their college journey
          confidently.
        </p>
      </section>
      </Container>
    </div>
  );
};

export default About;
