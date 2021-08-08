import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import Layout from '../../components/layout';
import Input from '../../components/UI/Input';

/**
 * @author
 * @function Signin
 **/

const Signin = props => {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
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
