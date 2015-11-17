import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import TodoApp from './components/TodoApp';
import './styles/todoApp.css';

render(
  <TodoApp state={window.__INITIAL_STATE__} />,
  document.getElementById('app')
);
