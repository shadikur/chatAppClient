import React, { useContext } from 'react';
import { Alert, Button, Col, Form, Row, Stack } from 'react-bootstrap';
import { AppContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { loginUser,
        loginError,
        loginInfo,
        updateLoginInfo,
        isLoginLoading, user } = useContext(AppContext);

    const navigate = useNavigate();

    if (user) {
        return navigate("/chat", { replace: true })
    }
    return (
        <div>
            <Form onSubmit={loginUser}>
                <Row style={{
                    height: "100vh",
                    justifyContent: "center",
                    paddingTop: "10%"
                }}>
                    <Col xs={6}>
                        <Stack gap="3">
                            <h2>Login</h2>
                            <Form.Control type='email' placeholder='Email' onChange={(e) => {
                                updateLoginInfo({ ...loginInfo, email: e.target.value })
                            }} />
                            <Form.Control type='password' placeholder='Password' onChange={(e) => {
                                updateLoginInfo({ ...loginInfo, password: e.target.value })
                            }} />
                            <Button variant='primary' type='submit'>
                                {isLoginLoading ? "Logining in to the account" : "Login"}
                            </Button>
                            {
                                loginError && <Alert variant='danger'>
                                    <p>{loginError.message}</p>
                                </Alert>
                            }

                        </Stack>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default Login;