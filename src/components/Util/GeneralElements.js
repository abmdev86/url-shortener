




export const LoadingElement = (props) => {
  const style =
  {
    color: props.color,

  };
  return (
    <h2 style={style}>Loading...</h2>
  );
};

export const FieldSetElement = (props) => {
  return (
    <fieldset >
      <label>
        Enter URL:
        <input style={props.style} type={props.type} onChange={props.onChange} />
      </label>


    </fieldset>
  );
};