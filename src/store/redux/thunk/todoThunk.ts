import { API } from 'src/api';
import { TodoThunk } from '../types/todo';
import { Dispatch } from 'redux';
import { getTodosActionCreator } from '../actionCreator/todo';

export const getTodos = (): TodoThunk => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await API.get('/todos');

      dispatch(getTodosActionCreator(response.data));
    } catch (error) {}
  };
};
