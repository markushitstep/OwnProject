import { Todo, TodoActionTypes } from '../types/todo';

export const getTodosActionCreator = (payload: Array<Todo>) => {
  return {
    type: TodoActionTypes.GET_TODOS,
    payload,
  };
};
