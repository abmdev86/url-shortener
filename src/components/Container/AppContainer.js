import Header from "../Header/Header.js";
import URLComponent from "../URLComponent/URLComponent.js";
import Container from "react-bootstrap/Container";
import AuthorizeUser from "../Util/Auth.js";
import { Col, Row } from "react-bootstrap";
import User from "../User/User.js";
import { useEffect, useState } from "react";
import Login from "../User/Login.js";

export default function AppContainer() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (loggedIn) return;
    console.log(loggedIn);
  }, [loggedIn]);

  function toggleLogin(e) {
    let isLoggedIn = !loggedIn;
    console.log(isLoggedIn);
    setLoggedIn(isLoggedIn);
    e.preventDefault();
  }
  return (
    <Container fluid>
      <Row>
        <Col>
          <Header title="URL Shortner" />
        </Col>
        <Col>
          {!loggedIn ? (
            <Login authUser={toggleLogin} />
          ) : (
            <User toggleLogin={toggleLogin} />
          )}
        </Col>

        {loggedIn ? (
          <URLComponent inputType="url" buttonValue="Shorten URL" />
        ) : (
          <Container hidden></Container>
        )}
      </Row>
    </Container>
  );
}
