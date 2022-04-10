

const DisplayElement = (props) => {

  return (
    <div style={props.style} className={props.className}>
      <h3>{props.longUrl}</h3>
      <h3>{props.shortUrl}</h3>

    </div>
  );
}

 const LoadingElement = (props) => {

  return (
    <h2 style={props.style}>Loading...</h2>
  );
};



 const FormElement = (props) => {
  return (
    <form onSubmit={props.handleSubmit} style={props.style} >
      <label >
        Enter URL:
        <input type={props.type} autoComplete={props.autoComplete} onChange={props.handleChange} />
        <input type="submit" value={props.buttonValue}/>
      </label>
    </form>
  );
};

const ComponentElements = {
  LoadingElement,
  FormElement,
  DisplayElement
};
export default ComponentElements;
