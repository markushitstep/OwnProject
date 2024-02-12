import { TodoActionTypes, TodoActions, TodoState } from './../types/todo';

const initialState: TodoState = {
  todos: [],
};

const todoReducer = (state = initialState, action: TodoActions): TodoState => {
  switch (action.type) {
    case TodoActionTypes.GET_TODOS: {
      return { ...state, todos: action.payload };
    }
    default:
      return state;
  }
};

export default todoReducer;
