
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

  handleValueChange(event) {


    this.setState({ value: event.target.value });
  }

  handleValueSubmit(event) {
    alert('converting  ' + this.state.value);
    event.preventDefault();

  }

  render() {
    const userInput = this.state.value;
    return (
      <form onSubmit={this.handleValueSubmit}>
        <p>{userInput}</p>
        <label>
          Enter URL:
          <input type="url" value={userInput} onChange={this.handleValueChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }


}