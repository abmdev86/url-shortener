
import React from 'react';

export default class URLInputComponent extends React.Component {

  constructor(props) {
    super(props);


    this.handleValueChange = this.handleValueChange.bind(this);


  }

  handleValueChange(event) {
    //   this.setState({ value: event.target.value });
    this.props.handleUrlChange(event.target.value);
  }



  render() {

    return (
      <fieldset >
        <label>
          Enter URL:
          <input type="url" onChange={this.handleValueChange} />
        </label>

      </fieldset>
    );
  }


}