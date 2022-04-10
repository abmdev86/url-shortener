

export function ValidateURL(stringValue) {
  const urlRegEx = /[(http(s) ?): \/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[com,org,net,io,int,pdf,edu,gov,mil,app]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;
  const valid = urlRegEx.exec(stringValue);

  if (valid) {
    stringValue = stringValue.match(urlRegEx)[0];
    console.log('ValidateURL: detected a valid url returning valid url');
    return stringValue;
  } else {
    console.log('ValidateURL: Could not detected a valid url returning \'\'\\');
    return '';

  }
}