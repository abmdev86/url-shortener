

export default function FallbackUI(props) {

  return (
    <div>
      <h1>Something went wrong.</h1>
      <code>{props.errorMsg}</code>
    </div>

  );
}