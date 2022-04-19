import Header from "../Header/Header.js";
import URLComponent from "../URLComponent/URLComponent.js";
import { Col, Row, Container } from "react-bootstrap";

export default function AppContainer(props) {
  return (
    <Container fluid >
      <Row xs="auto" sm="auto" md="auto" xl="auto" lg="auto" xxl="auto">
        <Col xs="auto" xxl="auto" xl="auto" sm="auto" md="auto" lg="auto">
          <Header
            class="shadow p-3 mb-5 rounded"
            title="URL Shortner"
            titleClass="text-wrap text-uppercase text-center"
          />
        </Col>
      </Row>
      <Row xs="auto" sm="auto" xl="auto" lg="auto">
        <Col xs="auto" md="auto" lg="auto">
          <URLComponent inputType="url" buttonValue="Shorten URL" />
        </Col>
      </Row>
    </Container>
  );
}
