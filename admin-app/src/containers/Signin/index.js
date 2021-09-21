import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import Layout from '../../components/layout';
import Input from '../../components/UI/Input';
import { login } from '../../actions';
import { useDispatch } from 'react-redux';
/**
 * @author
 * @function Signin
 **/

const Signin = props => {
  const dispatch = useDispatch();
  const userLogin = e => {
    e.preventDefault();
    const user = {
      email: 'rohantaneja@gmail.com',
      pass: '123456',
    };
    dispatch(login(user));
  };

  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
              <Input
                label='Email'
                placeholder='Enter your Email'
                value=''
                type='text'
                onChange={() => {}}
              />
              <Input
                label='Password'
                placeholder='Enter your Password'
                value=''
                type='text'
                onChange={() => {}}
              />
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signin;
