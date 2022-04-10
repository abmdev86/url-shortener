import React, { useState, useEffect } from "react";
import { LoadingElement, FieldSetElement } from "../Util/GeneralElements";


export default function URLComponent(props) {

  const [urlValue, setUrlValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const urlRegEx = /[(http(s) ?): \/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;

  useEffect(() => {
    console.log('initialize...');
  }, []);
  useEffect(() => {
    function doSomething() {
      if (urlValue.length <= 16) {
        console.log("url is blank...");
        return;
      }
      console.log(urlValue);
    }

    doSomething();
  }, [urlValue]);

  // sets the urlValue state once it is over 15 characters long
  function handleChange(event) {

    let stringValue = event.target.value.trim();
    const valid = urlRegEx.exec(stringValue);

    if (valid) {
      const validURL = stringValue.match(urlRegEx);
      stringValue = validURL[0];
      console.log(stringValue + " being set");

      setUrlValue(stringValue);
    } else {
      console.log("not a valid url");
      setUrlValue('');
      return;
    }

    event.preventDefault();
  }


  function handleSubmit(event) {

    // log event
    //  calling api in useEffect due to urlValue change so loading
    setIsLoading(true);
    event.preventDefault();


  }

  // field element




  if (isLoading) {
    return <LoadingElement color="red" />;
  }
  //TODO change to field element and set submit to validateInput.
  return <FieldSetElement style={{ color: "green" }} type="url" handleChange={handleChange} handleSubmit={handleSubmit} buttonValue="Shorten URL" />;

}