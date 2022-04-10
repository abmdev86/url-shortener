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
    const stateUrlValue = this.state.urlValue;
    return (
      <div>
        <p>{stateUrlValue}</p>
        <URLInputComponent handleUrlChange={this.handleUrlChange} />

      </div>
    );
  }
}