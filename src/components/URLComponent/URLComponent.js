import React, { useState, useEffect } from "react";
import ComponentElements from "../Util/GeneralElements";
import RegexObject from "../Util/RegexUtil";


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
    function doSomething() {

      console.log("URLComponent: UseEffect: " + longUrlValue + " is the urlValue");
      setShortUrl("testbit.ly");
      // done with work so not loading.
      setIsLoading(false);
      return;
    }


    if (isLoading) {
      console.log("going to  do something...");

      // reach bitly.
      doSomething();

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
      <ComponentElements.FormElement style={{ color: "green" }} type="text" handleChange={handleChange} handleSubmit={handleSubmit} buttonValue="Shorten URL" />
      <ComponentElements.DisplayElement longUrl={longUrlValue} shortUrl={shortUrl} />
    </div>
  );

}