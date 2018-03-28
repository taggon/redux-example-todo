import { ADD_TODO, DELETE_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED, INIT_TODO } from '../constants/ActionTypes';

const initialState = [{
  text: '할 일 목록 #1',
  completed: false,
  id: 1
}];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        },
        ...state
      ];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ?
        Object.assign({}, todo, { completed: !todo.completed }) :
        todo
      );
    case INIT_TODO:
      return action.todos.map( (text, idx) => { return {id: idx+1, completed: false, text}}  );
    default:
      return state;
  }
}
