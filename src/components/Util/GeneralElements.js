import { Col, Container, Row } from "react-bootstrap";


const DisplayElement = (props) => {

  return (
    <Container fluid sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
      <Row xs="auto" sm="auto" md="auto" xl="auto" lg="auto" xxl="auto">
        <Col xs="auto" xxl="auto" xl="auto" sm="auto" md="auto" lg="auto">
          <h3 className="text-secondary">{props.longUrl}</h3>
        </Col>
        <Col xs="auto" xxl="auto" xl="auto" sm="auto" md="auto" lg="auto">
          <h3 className="text-success">{props.shortUrl}</h3>
        </Col>
      </Row>
    </Container>
  );
}

 const LoadingElement = (props) => {

  return (
    <h2 style={props.style}>{props.message}</h2>
  );
};



 const FormElement = (props) => {
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

const ComponentElements = {
  LoadingElement,
  FormElement,
  DisplayElement
};
export default ComponentElements;
