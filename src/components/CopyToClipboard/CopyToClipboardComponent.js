import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";

function CopyToClipboardComponent(props) {
  const [isCopied, setIsCopied] = useState(false);

  function copy() {
    setIsCopied(true);
    props.text = " ";
  }

  if (!isCopied && props.text) {
    return (
      <Container fluid>
        <CopyToClipboard
          text={props.text}
          onCopy={() => copy()}
          options={{ debug: props.debug, message: "" }}
          style={props.style}
        >
          <Button variant="info">Copy</Button>
        </CopyToClipboard>
      </Container>
    );
  } else if (isCopied && props.text) {
    return <span>Copied!</span>;
  } else if (isCopied && !props.text) {
    setIsCopied(false);
    return (
      <Container fluid>
        <CopyToClipboard
          text={props.text}
          onCopy={() => copy()}
          options={{ debug: props.debug, message: "" }}
          style={props.style}
        ></CopyToClipboard>
      </Container>
    );
  }
}

export default CopyToClipboardComponent;
