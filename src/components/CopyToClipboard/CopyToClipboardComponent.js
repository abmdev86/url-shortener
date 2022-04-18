import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function CopyToClipboardComponent(props) {
  const [isCopied, setIsCopied] = useState(false);

  function copy() {
    setIsCopied(true);
    props.text = " ";
  }

  if (!isCopied && props.text) {
    return (
      <div>
        <CopyToClipboard
          text={props.text}
          onCopy={() => copy()}
          options={{ debug: props.debug, message: "" }}
          style={props.style}
        >
          <button>Copy</button>
        </CopyToClipboard>
      </div>
    );
  } else if (isCopied && props.text) {
    return <span>Copied!</span>;
  } else if (isCopied && !props.text) {
    setIsCopied(false);
    return (
      <div>
        <CopyToClipboard
          text={props.text}
          onCopy={() => copy()}
          options={{ debug: props.debug, message: "" }}
          style={props.style}
        >
          <button>Copy</button>
        </CopyToClipboard>
      </div>
    );
  }
}

export default CopyToClipboardComponent;
