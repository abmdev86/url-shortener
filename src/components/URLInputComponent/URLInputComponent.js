
import React from 'react';

export default class URLInputComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleValueSubmit = this.handleValueSubmit.bind(this);

  }

  handleValueChange(e) {
    this.setState({ value: e.target.value });
  }

  handleValueSubmit(e) {
    e.preventDefault();

    // checks
    alert(e.target.value + " was set to State.value");

  }

  render() {
    return (
      <form onSubmit={this.handleValueSubmit}>
        <label>
        Enter URL:
          <input type="text" value={this.state.value} onChange={this.handleValueChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }


}