import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";

export default function User(props) {
  const UserElement = (props) => <Container>{props.token}</Container>;

  return (
    <Container>
        <Button variant="danger" onClick={props.toggleUserLogin}>Logout</Button>
      <UserElement token={props.token} />
    </Container>
  );
}
