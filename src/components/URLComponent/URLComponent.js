import React, { useState, useEffect } from "react";
import ComponentElements from "../Util/GeneralElements";
import RegexObject from "../Util/RegexUtil";
import APIHandler from "../Util/HandleAPI";
import CopyToClipboardComponent from "../CopyToClipboard/CopyToClipboardComponent";
import { Col, Container, Row } from "react-bootstrap";

export default function URLComponent(props) {
  const [longUrlValue, setLongUrlValue] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //  console.log('initialize...');
  }, []);

  // urlValue
  useEffect(() => {
    if (longUrlValue === "") {
      //console.log("url is blank...");
      return;
    }

    function shortenURL() {
      console.log(
        "URLComponent: UseEffect: " + longUrlValue + " is the urlValue"
      );
      APIHandler.getShortenURL_POST(longUrlValue).then((link) => {
        setShortUrl(link);
        setIsLoading(false);
      });

      return;
    }

    if (isLoading) {
      //console.log("reaching to bitly to  do shorten...");
      shortenURL();
    }

    //console.log("URLComponent: UseEffect: Didnt hit submit.");
  }, [longUrlValue, isLoading, shortUrl]);

  // sets the urlValue state
  function handleChange(event) {
    if (shortUrl !== " ") {
      setShortUrl("");
    }
    let stringValue = RegexObject.getValidURL(event.target.value).trim();
    setLongUrlValue(stringValue);
    event.preventDefault();
  }

  function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
  }

  if (isLoading) {
    return <ComponentElements.LoadingElement color="red" message="Loading..." />;
  }

  return (
    <Container fluid sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
      <Row xs="auto" sm="auto" md="auto" xl="auto" lg="auto" xxl="auto">
        <Col xs="auto" xxl="auto" xl="auto" sm="auto" md="auto" lg="auto">
          <ComponentElements.FormElement
            type={props.inputType}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            buttonValue={props.buttonValue}
          />
        </Col>  
        <Col xs="auto" xxl="auto" xl="auto" sm="auto" md="auto" lg="auto">
          <ComponentElements.DisplayElement
            longUrl={longUrlValue}
            shortUrl={shortUrl}
          />
          <CopyToClipboardComponent text={shortUrl} />
        </Col>
      </Row>
    </Container>
  );
}
