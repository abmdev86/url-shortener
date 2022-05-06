import Header from "../Header/Header.js";
import URLComponent from "../URLComponent/URLComponent.js";
import Container from "react-bootstrap/Container";
import AuthorizeUser from "../Util/Auth.js";
import { Col, Row } from "react-bootstrap";
import User from "../User/User.js";
import { useEffect, useState } from "react";
import Login from "../User/Login.js";
import { logger } from "../Util/LoggerUtil.js";
import { saltPw } from "../Util/Utilities.js";

export default function AppContainer() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPW, setUserPW] = useState("");

  useEffect(() => {
    if (loggedIn) return;
  }, [loggedIn]);
  useEffect(() => {
    const hash = saltPw(userPW);
    setUserPW(hash);
  }, [userPW]);

  function toggleLogin(e) {
    let isLoggedIn = !loggedIn;
    let userEmail = e.target.email.value || userName;
    let userPassword = "";
    // hash pw from e.target.password.value
    console.log(userEmail);
    console.log(userPassword);
    //set email and password

    //set login to true
    logger(isLoggedIn);
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
            <User toggleUserLogin={toggleLogin} />
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
