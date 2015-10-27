import React, { Component } from 'react';
import classnames from 'classnames';

class TodoItem extends Component {
  handleChange(event) {
    this.props.completeTodo(this.props.todo.id);
  }

  handleDelete(event) {
    this.props.deleteTodo(this.props.todo.id);
  }

  render() {
    const { todo } = this.props;

    return (
      <li className={classnames({completed: todo.completed})}>
        <input type="checkbox" checked={todo.completed ? 'checked': ''} onChange={this.handleChange.bind(this)} />
        <label>{todo.text}</label>
        <button className="destroy" onClick={this.handleDelete.bind(this)} />
      </li>
    );
  }
}

export default TodoItem;
