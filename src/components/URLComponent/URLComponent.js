import React, { useState, useEffect } from "react";
import ComponentElements from "../Util/GeneralElements";
import RegexObject from "../Util/RegexUtil";
import APIHandler from "../Util/HandleAPI";
import CopyToClipboardComponent from "../CopyToClipboard/CopyToClipboardComponent";
import Container from "react-bootstrap/Container";

export default function URLComponent(props) {
  const [longUrlValue, setLongUrlValue] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
      // is loading sets running call to API
      shortenURL();
    }
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
    return (
      <ComponentElements.LoadingElement color="red" message="Loading..." />
    );
  }

  return (
    <Container fluid>
      <ComponentElements.DisplayElement
        longUrl={longUrlValue}
        shortUrl={shortUrl}
        type={props.inputType}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        buttonValue={props.buttonValue}
      />
      <CopyToClipboardComponent text={shortUrl} />
    </Container>
  );
}
