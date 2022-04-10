import React from "react";
import URLInputComponent from "./URLInputComponent";


export default class URLComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { urlValue: '' };
    this.handleUrlChange = this.handleUrlChange.bind(this);
  }

  handleUrlChange(value) {

    this.setState({ urlValue: value });
  }

  render() {
    return (
      <div>
        <p>{this.state.urlValue }</p>
        <URLInputComponent handleUrlChange={this.handleUrlChange} />

      </div>
    );
  }
}