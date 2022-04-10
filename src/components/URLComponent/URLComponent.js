import React, { useState, useEffect } from "react";
import { LoadingElement, FieldSetElement } from "../Util/GeneralElements";
import RegexObject from "../Util/RegexUtil";


export default function URLComponent(props) {

  const [urlValue, setUrlValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log('initialize...');

  }, []);



  // urlValue
  useEffect(() => {
    if (urlValue === '') {
      console.log("url is blank...");
      return;
    }
    //TODO: do something...
    function doSomething() {

      console.log("URLComponent: UseEffect: " + urlValue + " is the urlValue");
    }

    doSomething();
    if (isLoading) {
      console.log("going to  do something...");
      // reach bitly.

      setIsLoading(false);
      return;
    }
    console.log("URLComponent: UseEffect: Didnt hit submit.");
  }, [urlValue, isLoading]);

  // sets the urlValue state
  function handleChange(event) {
    let stringValue = RegexObject.getValidURL(event.target.value).trim();
    setUrlValue(stringValue);
    event.preventDefault();
  }


  function handleSubmit(e) {
    // TODO: cache entry to store for recalling later
    //set loading to true to allow useEffect to run the call to server.
    setIsLoading(true);
    e.preventDefault();
  }


  if (isLoading) {

    return <LoadingElement color="red" />;

  }

  return <FieldSetElement style={{ color: "green" }} type="text" handleChange={handleChange} handleSubmit={handleSubmit} buttonValue="Shorten URL" />;

}