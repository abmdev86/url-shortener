import React, { useState, useEffect } from "react";
import { LoadingElement, FormElement } from "../Util/GeneralElements";


export default function URLComponent(props) {

  const [urlValue, setUrlValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //TODO




  }, [urlValue]);

  function handleSubmit(event) {
    const stringValue = event.target.value;
    // if (stringValue.length <= 15) {
    //   return;
    // }

    console.log(stringValue + " being set");
    setUrlValue(stringValue);
    event.preventDefault();


  }

  // field element




  if (isLoading) {
    return <LoadingElement color="red" />;
  }
  //TODO change to field element and set submit to validateInput.
  return <FormElement type="url" handleChange={handleSubmit} />;

}