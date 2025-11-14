import React, { useEffect, useState } from 'react'
import { Container, Form, Button, } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {loginUser} from '../../actions/userAction.js';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    // const loginState = useSelector(state => state.loginUserReducer);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    useEffect(() => {
        if (localStorage.getItem('currentUser')) {
            window.location.href = '/';
        }
    }, [])

    const handleLogin = () => {
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email');
        }
        else if (!passwordRegex.test(password)) {
            alert('Password must be of at least 8 characters.\nMust contain a special character.\nMust have at least 1 digit from [0-9].')
        } else {
            const user = { email, password }
            dispatch(loginUser(user));
        }
    }

    return (
        <>
            <Container
                style={{ padding: '3rem 6rem 5rem 6rem', backgroundColor: 'rgba(199, 200, 204,0.3)', marginTop: '2rem',marginBottom: '4rem', borderRadius: '20px' }}>
                {/* {loading && <Loader />}
                {success && <Success success="Login Successful."></Success>}
                {error && <Error error={error['message']} />} */}
                <Form>
                    <h2 style={{ textAlign: 'center', margin: '0.5rem 0' }}>Login</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicCheckbox">
                        <div className="text-muted" style={{ fontWeight: '300', fontSize: '0.9rem', margin: '0.4rem 0', textAlign: "center" }}>
                            Don't have an account? Please
                            <a style={{ textDecoration: 'none' }} href='/register' alt='Sign Up'>
                                &nbsp;Sign Up
                            </a>
                            .
                            <Link to='/forgot-password' className='text-primary' style={{ textDecoration: 'none' }}>
                                <p style={{textAlign:'center'}} >
                                    Forgot Password?
                                </p>
                            </Link>
                        </div>

                    </Form.Group>
                    <div style={{ textAlign: 'center' }}>
                        <Button
                            variant="primary"
                            onClick={handleLogin}
                        >
                            Login
                        </Button>
                    </div>

                </Form>
            </Container>
        </>
    )
}

export default Login