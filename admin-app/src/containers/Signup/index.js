import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import Layout from '../../components/layout';
import Input from '../../components/UI/Input';
/**
 * @author
 * @function Signup
 **/

const Signup = props => {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    label='First Name'
                    placeholder='Enter your First Name'
                    value=''
                    type='text'
                    onChange={() => {}}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label='Last Name'
                    placeholder='Enter your Last Name'
                    value=''
                    type='text'
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Input
                label='Email'
                placeholder='Enter your Email'
                value=''
                type='email'
                onChange={() => {}}
              />
              <Input
                label='Password'
                placeholder='Enter your password'
                value=''
                type='password'
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

export default Signup;
