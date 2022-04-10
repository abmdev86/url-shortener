const urlRegEx = /[(http(s) ?): //(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[com,org,net,io,int,pdf,edu,gov,mil,app,html]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;

const RegexObject = {
  getValidURL,
  getSubDomain,
  urlRegEx
};

export default RegexObject;



// functions
function getValidURL(stringValue) {

  if (validateURL(stringValue)) {
    stringValue = stringValue.match(urlRegEx)[0];
    stringValue = stringValue.replace(' ', '-');
    console.log(`ValidateURL: detected a valid url,\n returning valid ${stringValue}`);
    return stringValue;
  } else {
    console.log('ValidateURL: Could not detected a valid url returning \'\'');
    return '';

  }
}

function getSubDomain(url) {
  return /[^.]+/.exec(url)[0].substring(0,7);
}
function validateURL(stringValue) {
  const valid = urlRegEx.exec(stringValue);
  return valid ? true : false;
}