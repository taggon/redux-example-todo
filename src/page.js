import React from 'react';
import ReactDOMServer from 'react-dom/server';
import TodoApp from './components/TodoApp';

export default function(initialState) {
  return ReactDOMServer.renderToString(
    <TodoApp state={initialState} />
  );
}
