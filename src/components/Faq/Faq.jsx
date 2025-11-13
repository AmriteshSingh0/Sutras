import React from "react";
import {Row,Col, Container} from "react-bootstrap";


const Faq = () => {
  return (
    <Container style={{marginTop:'5rem', textAlign:'center'}}>
        <div>
            <b><h1 style={{marginBottom:'3rem'}}>Frequently Asked Questions FAQs</h1></b>
        </div>
        {/* <div className="Faq" 
        style={{backgroundColor:'rgba(255,255,255,0.25)',height:'12rem', color:'black', border:'solid 1px black', borderRadius:'2rem',padding:'2rem'}}>
            <Row>
                <Col md={50} style={{padding:'rem', display:'grid', alignItems:'center'}}>
                   <h2 style={{fontWeight:'600'}}>What is Sutra?</h2>
                    <p style={{fontSize:'1.2rem', textAlign:'center'}}>Sutrais a platform designed to help college students connect with 
                        seniors for guidance on academics, projects, internships, and career 
                        paths. It aims to create a community where knowledge-sharing is easy 
                        and accessible.</p>
                </Col>
            </Row>
        </div> */}
        <div className="Faq1" 
        style={{backgroundColor:'rgba(255,255,255,0.25)',height:'12rem', color:'black', border:'solid 1px black', margin:'2rem 0', borderRadius:'2rem',padding:'2rem'}}>
            <Row>
                <Col md={50} style={{padding:'rem', display:'grid', alignItems:'center'}}>
                    <h2 style={{fontWeight:'600'}}>How do I sign up on Sutra?</h2>
                    <p style={{fontSize:'1.2rem', textAlign:'center'}}>You can sign up by clicking on the "Sign Up" button on the homepage and 
                        filling in your details. You’ll need a valid college email address to 
                        complete the registration.</p>
                </Col>
            </Row>
        </div>
        <div className="Faq2" 
        style={{backgroundColor:'rgba(255,255,255,0.25)',height:'12rem', color:'black', border:'solid 1px black', margin:'2rem 0', borderRadius:'2rem',padding:'2rem'}}>
            <Row>
                <Col md={50} style={{padding:'rem', display:'grid', alignItems:'center'}}>
                    <h2 style={{fontWeight:'600'}}>Who can use Sutra?</h2>
                    <p style={{fontSize:'1.2rem', textAlign:'center'}}>Sutrais open to college students from any year and alumni willing to 
                        provide mentorship and guidance. Freshers and sophomores often find it 
                        particularly helpful for academic and career-related advice.</p>
                </Col>
            </Row>
        </div>
        <div className="Faq3" 
        style={{backgroundColor:'rgba(255,255,255,0.25)',height:'12rem', color:'black', border:'solid 1px black', margin:'2rem 0', borderRadius:'2rem',padding:'2rem'}}>
            <Row>
                <Col md={50} style={{padding:'rem', display:'grid', alignItems:'center'}}>
                    <h2 style={{fontWeight:'600'}}>How can I ask for guidance from a senior?</h2>
                    <p style={{fontSize:'1.2rem', textAlign:'center'}}>After signing up, you can search for senior students in your field of interest 
                        using the search feature. Once you find a suitable mentor, you can send them a 
                        message through our platform.</p>
                </Col>
            </Row>
        </div>

    </Container>
  );
};

export default Faq;