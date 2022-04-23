import { Container } from "react-bootstrap";

export default function Header(props) {
  return (
    <Container>
      <header className="header ">
        <h1>{props.title}</h1>
      </header>
    </Container>
  );
}
