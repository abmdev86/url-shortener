import React, { useState, useEffect } from "react";
import ComponentElements from "../Util/GeneralElements";
import RegexObject from "../Util/RegexUtil";
import APIHandler from "../Util/HandleAPI";


export default function URLComponent(props) {

  const [longUrlValue, setLongUrlValue] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log('initialize...');

  }, []);



  // urlValue
  useEffect(() => {
    if (longUrlValue === '') {
      console.log("url is blank...");
      return;
    }
    //TODO: do something...
    function shortenURL() {

      console.log("URLComponent: UseEffect: " + longUrlValue + " is the urlValue");
      APIHandler.getShortenURL_POST(longUrlValue).then(link => {

        setShortUrl(link);
        setIsLoading(false);
      });

      return;
    }


    if (isLoading) {
      console.log("reaching to bitly to  do shorten...");

      // reach bitly.
      shortenURL();

    }
    console.log("URLComponent: UseEffect: Didnt hit submit.");
  }, [longUrlValue, isLoading, shortUrl]);

  // sets the urlValue state
  function handleChange(event) {
    let stringValue = RegexObject.getValidURL(event.target.value).trim();
    setLongUrlValue(stringValue);
    event.preventDefault();
  }


  function handleSubmit(e) {
    // TODO: cache entry to store for recalling later
    //set loading to true to allow useEffect to run the call to server.
    setIsLoading(true);
    e.preventDefault();
  }


  if (isLoading) {

    return <ComponentElements.LoadingElement color="red" />;

  }

  return (
    <div>
      <ComponentElements.FormElement style={{ color: "green" }} type="url" handleChange={handleChange} handleSubmit={handleSubmit} buttonValue="Shorten URL" />
      <ComponentElements.DisplayElement longUrl={longUrlValue} shortUrl={shortUrl} />
    </div>
  );

}