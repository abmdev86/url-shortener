import Header from "../Header/Header.js";
import URLComponent from "../URLComponent/URLComponent.js";
import { Col, Row, Container } from "react-bootstrap";

export default function AppContainer(props) {
  return (
    <Container fluid sm md lg xl xxl>
      <Row className="justify-content-md-center">
        <Col xs md lg>
          <Header />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={true} lg={true}>
          <URLComponent />
        </Col>
      </Row>
    </Container>
  );
}
