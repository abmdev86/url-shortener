import Header from "../Header/Header.js";
import URLComponent from "../URLComponent/URLComponent.js";
import Container from "react-bootstrap/Container";
import AuthorizeUser from "../Util/Auth.js";

export default function AppContainer(props) {
  // AuthorizeUser("auroiah.morgan@gmail.com", "S@xAF0n317");
  return (
    <Container className="container container-sm" fluid>
      <Header title="URL Shortner" />
      <URLComponent inputType="url" buttonValue="Shorten URL" />
    </Container>
  );
}
