import React, { useContext } from 'react';
import { Alert, Button, Col, Form, Row, Stack } from 'react-bootstrap';
import { AppContext } from '../Context/AuthContext';

const Register = () => {
    const { registerInfo, updateRegisterInfo } = useContext(AppContext)
    return (
        <div>
            <Form>
                <Row style={{
                    height: "100vh",
                    justifyContent: "center",
                    paddingTop: "10%"
                }}>
                    <Col xs={6}>
                        <Stack gap="3">
                            <h2>Register</h2>
                            <Form.Control type='text' placeholder='Name'
                                onChange={(e) => updateRegisterInfo({ ...registerInfo, name: e.target.value })}
                            />
                            <Form.Control type='email' placeholder='Email'
                                onChange={(e) => updateRegisterInfo({ ...registerInfo, email: e.target.value })}
                            />
                            <Form.Control type='password' placeholder='Password'
                                onChange={(e) => updateRegisterInfo({ ...registerInfo, password: e.target.value })}
                            />
                            <Button variant='primary' type='submit'>
                                Register
                            </Button>

                            <Alert variant='danger'>
                                <p>An error has been occured</p>
                            </Alert>
                        </Stack>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default Register;