import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import Header from './Header';
import MainSection from './MainSection';
import * as TodoActions from '../actions/todos';
import todoStore from '../store/todoStore';

var actions = bindActionCreators(TodoActions, todoStore.dispatch);

class TodoApp extends Component {
  constructor(props, context) {
    super(props, context);
    todoStore.subscribe(this._onChange.bind(this));
  }

  _onChange() {
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todoStore.getState()} actions={actions} />
      </div>
    );
  }
}

export default TodoApp;
