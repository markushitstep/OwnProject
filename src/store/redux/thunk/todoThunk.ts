import { API } from 'src/api';
import { TodoActions, TodoThunk } from '../types/todo';
import axios from 'axios';
import { Dispatch, UnknownAction } from 'redux';
import { ThunkDispatch, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../reducers';

export const getTodos = () => {
  return async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
      );

      console.log(response);
    } catch (error) {}
  };
};

export const fetchTodos = () => {
  return async () => {
    try {
      //dispatch(fetchTodosRequest());

      // Здесь вы можете выполнить асинхронный запрос, например, к API
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
      );
      //const data: Todo[] = await response.json();
      console.log(response);
      //dispatch(fetchTodosSuccess(data));
    } catch (error) {
      //dispatch(fetchTodosFailure(error.message));
    }
  };
};

// export const getTodos = createAsyncThunk(
//   'https://jsonplaceholder.typicode.com/todos',
//   async () => {
//     const response = await axios.get(
//       'https://jsonplaceholder.typicode.com/todos',
//     );
//     console.log('dsadsa');
//     return response.data;
//   },
// );
