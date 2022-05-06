import { Button, Container, Form } from "react-bootstrap";
import React from "react";

export default function Login(props) {
  return (
    <Container>
      <Form onSubmit={props.authUser}>
        <Form.Label>Login</Form.Label>
        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        {/* end email group */}
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>
        {/* end pw group */}
        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="Stay Logged in" />
        </Form.Group>
        {/* end checkbox */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
