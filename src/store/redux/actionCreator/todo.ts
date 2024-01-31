import { GetTodosAction, Todo } from '../types/todo';

export const getTodosActionCreator = (payload: Array<Todo>) => {
  return {
    type: 'GET_TODOS',
    payload,
  };
};
