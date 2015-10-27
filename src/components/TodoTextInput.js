import React, { Component } from 'react';

class TodoTextInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: this.props.text || ''
    };
  }

  handleChange(event) {
    this.setState( {text: event.target.value} );
  }

  handleKeyUp(event) {
    if (event.which === 13) {
      this.props.onSave(event.target.value.trim());
      this.setState( {text: ''} );
    }
    return true;
  }

  render() {
    return (
      <input
        type="text"
        placeholder={this.props.placeholder}
        autoFocus="true"
        value={this.state.text}
        onChange={this.handleChange.bind(this)}
        onKeyUp={this.handleKeyUp.bind(this)} />
    );
  }
}

export default TodoTextInput;
