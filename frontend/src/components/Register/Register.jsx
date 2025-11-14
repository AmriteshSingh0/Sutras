import React, { useState, useEffect } from 'react';
import { Form, Button, Alert, Container } from 'react-bootstrap';
import { registerUser } from '../../actions/userAction';
import { useDispatch, useSelector } from 'react-redux';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

function Register() {
    const dispatch = useDispatch();
    const userState = useSelector(state => state.registerUserReducer)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        college: '',
        course: '',
        year: '',
    });

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });

        if (name === 'email') {
            setEmailError(!emailRegex.test(value));
        } else if (name === 'password') {
            setPasswordError(!passwordRegex.test(value));
        } else if (name === 'confirmPassword') {
            setConfirmPasswordError(value !== formData.password);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (emailError || passwordError || confirmPasswordError) {
            console.log(emailError, passwordError, confirmPasswordError);
            alert("An Error Occured.") // Prevent form submission if validation fails
        }

        console.log(formData);
        dispatch(registerUser(formData));
    };

    return (
        <Container style={{ marginTop: '5rem', padding: '0 7rem', textAlign: 'left' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}> Registration Form</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName">
                    <label style={{ width: 'max-content' }}>Name</label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange}
                        placeholder='What should we call you?'
                        required />
                </Form.Group>
                <br />
                <Form.Group controlId="formBasicEmail">
                    <label style={{ width: 'max-content' }}>Email address</label>
                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange}
                        placeholder='Enter Email'
                        required />
                    {emailError && <Alert variant="danger">Invalid email address.</Alert>}
                </Form.Group>
                <br />

                <Form.Group controlId="formBasicPassword">
                    <label style={{ width: 'max-content' }}>Password</label>
                    <Form.Control type="password" name="password" value={formData.password} onChange={handleChange}
                        placeholder='Enter Password'
                        required />
                    {passwordError && <Alert variant="danger">Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.</Alert>}
                </Form.Group>
                <br />

                <Form.Group controlId="formBasicConfirmPassword">
                    <label style={{ width: 'max-content' }}>Confirm Password</label>
                    <Form.Control type="text" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}
                        placeholder='Enter Password to Confirm'
                        required />
                    {confirmPasswordError && <Alert variant="danger">Passwords do not match.</Alert>}
                </Form.Group>
                <br />

                <Form.Group controlId="formBasicCollege">
                    <label style={{ width: 'max-content' }}>College</label>
                    <Form.Control type="text" name="college" value={formData.college} onChange={handleChange}
                        placeholder='Enter College'
                        required />
                </Form.Group>
                <br />

                <Form.Group controlId="formBasicBranch">
                    <label style={{ width: 'max-content' }}>Course</label>
                    <Form.Control type="text" name="course" value={formData.course} onChange={handleChange}
                        placeholder='Enter Course'
                        required />
                </Form.Group>
                <br />

                <Form.Group controlId="formBasicYear">
                    <label style={{ width: 'max-content' }}>Year</label>
                    <Form.Control type="number" name="year" value={formData.year} onChange={handleChange}
                        placeholder='Enter Course Year'
                        required />
                </Form.Group>
                <br />
                <Form.Group controlId="formInterest">
                    <label style={{ width: 'max-content' }}>Interest / Domain</label>
                    <Form.Select
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select your interest</option>
                        <option value="Web & App Development">Web & App Development</option>
                        <option value="Data Science & Analytics">Data Science & Analytics</option>
                        <option value="Artificial Intelligence & Machine Learning">Artificial Intelligence & Machine Learning</option>
                        <option value="Cybersecurity & Ethical Hacking">Cybersecurity & Ethical Hacking</option>
                        <option value="Cloud Computing & DevOps">Cloud Computing & DevOps</option>
                        <option value="UI/UX & Graphic Design">UI/UX & Graphic Design</option>
                        <option value="Blockchain & Web3">Blockchain & Web3</option>
                        <option value="Internet of Things (IoT) & Robotics">Internet of Things (IoT) & Robotics</option>
                        <option value="Game & AR/VR Development">Game & AR/VR Development</option>
                        <option value="Product & Project Management">Product & Project Management</option>
                        <option value="Business Development & Marketing">Business Development & Marketing</option>
                        <option value="Content Creation & Video Editing">Content Creation & Video Editing</option>
                        <option value="Entrepreneurship & Startups">Entrepreneurship & Startups</option>
                        <option value="Finance, Investment & FinTech">Finance, Investment & FinTech</option>
                        <option value="Communication, Public Speaking & Podcasting">Communication, Public Speaking & Podcasting</option>
                    </Form.Select>
                </Form.Group>


                <Button variant="primary" type="submit" style={{ margin: '3rem 0' }}>
                    Submit
                </Button>
            </Form>
        </Container>

    );
}

export default Register;