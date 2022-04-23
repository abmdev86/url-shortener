import Header from "../Header/Header.js";
import URLComponent from "../URLComponent/URLComponent.js";
import Container from "react-bootstrap/Container";

export default function AppContainer(props) {
  return (
    <Container className="container" fluid sm={3}>
      <Header title="URL Shortner" />
      <URLComponent inputType="url" buttonValue="Shorten URL" />
    </Container>
  );
}
