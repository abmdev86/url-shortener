




export const LoadingElement = (props) => {
  const style =
  {
    color: props.color,

  };
  return (
    <h2 style={style}>Loading...</h2>
  );
};



export const FormElement = (props) => {
  return (
    <form >
      <label >
        Enter URL:
        <input style={props.style} type={props.type} onChange={props.handleChange} />
      </label>



    </form>
  );
};