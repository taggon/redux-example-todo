import React, { PropTypes, Component } from 'react';
import TodoTextInput from './TodoTextInput';

class Header extends Component {
  handleSave(text) {
    if (text.length > 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <header className="header">
        <h1>할 일 목록</h1>
        <TodoTextInput onSave={this.handleSave.bind(this)} placeholder="할 일을 입력해주세요" />
      </header>
    );
  }
}

export default Header;
