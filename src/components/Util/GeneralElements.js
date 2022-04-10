




export const LoadingElement = (props) => {

  return (
    <h2 style={props.style}>Loading...</h2>
  );
};



export const FieldSetElement = (props) => {
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