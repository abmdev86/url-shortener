import { Col, Container, Form, Row } from "react-bootstrap";

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
};

const LoadingElement = (props) => {
  return <h2 style={props.style}>{props.message}</h2>;
};

const FormElement = (props) => {
  return (
    <>
      <style>
        {`
            .form-group-flat{
              bacgroud-color: purple;
              color: white
               display: flex;
    align-items: center;
    justify-content: center;  
            }
          `}
      </style>

      <Form onSubmit={props.handleSubmit} style={props.style}>
        <Form.Group variant="flat" className="mb-2">
          <Form.Label htmlFor="url-input">Enter URL:</Form.Label>
          <Form.Control
            name="url-input"
            type={props.type}
            autoComplete={props.autoComplete}
            onChange={props.handleChange}
            placeholder="https://www.example.com"
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control type="submit" value={props.buttonValue} />
        </Form.Group>
      </Form>
    </>
  );
};

const ComponentElements = {
  LoadingElement,
  FormElement,
  DisplayElement,
};
export default ComponentElements;
