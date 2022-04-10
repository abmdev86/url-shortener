import React, { useState, useEffect } from "react";
import { LoadingElement, FieldSetElement } from "../Util/GeneralElements";


export default function URLComponent(props) {

  const [urlValue, setUrlValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //TODO




  }, [urlValue]);

  function validateInput(event) {
    const stringValue = event.target.value;
    if (stringValue.length <= 15) {
      return;
    }
    console.log(stringValue + " being set");
    setUrlValue(stringValue);
  }

  // field element




  if (isLoading) {
    return <LoadingElement color="red" />;
  }
  //TODO change to field element and set submit to validateInput.
  return <FieldSetElement type="url" onChange={validateInput} />;

}