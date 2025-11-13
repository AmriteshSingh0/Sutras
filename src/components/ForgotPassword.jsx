import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../actions/userAction.js';
import { Form, Button, Container } from 'react-bootstrap';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const { loading, message, error, success } = useSelector((state) => state.userForgotPassword);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (emailRegex.test(email))
            dispatch(forgotPassword(email));
        else {
            alert('Please Enter the correct Email.')
        }
    };

    return (
        <>
            <Container>
                <h1
                    style={{ textAlign: 'center', margin: '2rem' }}
                >Forgot Password </h1>
                <Form onSubmit={handleSubmit} className='bg-light' style={{ padding: '2rem' }}>
                    <Form.Label
                        style={{ marginTop: '2rem' }}
                    >Email</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required

                    />
                    <div style={{ textAlign: 'center', margin: '2rem 0 0 0' }}>
                        <Button
                            type="submit"
                            variant="primary"
                            disabled={loading}

                        >
                            Reset Password
                        </Button>
                    </div>


                </Form>
            </Container>
        </>
    );
}

export default ForgotPassword;
