export default function Header(props) {
  return (
    <header className={props.class}>
      <h1 className={props.titleClass}>{props.title}</h1>
    </header>
  );
}
