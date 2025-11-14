import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../actions/userAction.js';
import { useParams } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';


function ResetPassword() {
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const dispatch = useDispatch();
    const { loading, message, error, success } = useSelector((state) => state.userResetPassword);
    const { email } = useParams();
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cpassword === password)
            if (passwordRegex.test(password))
                dispatch(resetPassword(email,password));
            else
                alert('Password must be of at least 8 characters.\nMust contain a special character.\nMust have at least 1 digit from [0-9].');
        else {
            alert("Passwords do not Match.")
        }
    }
    return (
        <>
            <Container>
                <h1
                    style={{ textAlign: 'center', margin: '2rem' }}
                >Reset Password </h1>
                <Form onSubmit={handleSubmit} className='bg-light'>
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter new password"
                        required
                    />
                    <Form.Label
                    style={{marginTop:'1rem'}}
                    >Confirm New Password</Form.Label>
                    <Form.Control
                        type="text"
                        value={cpassword}
                        onChange={(e) => setCpassword(e.target.value)}
                        placeholder="Confrim new password"
                        required
                    />
                    <div style={{ textAlign: 'center', margin: '2rem 0 0 0' }}>
                        <Button
                            type="submit"
                            variant="primary"
                            disabled={loading}

                        >
                            Set New Password
                        </Button>
                    </div>
                </Form>
            </Container>
        </>
    );
}

export default ResetPassword;
