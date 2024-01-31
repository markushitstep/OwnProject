import { ThunkAction, UnknownAction } from '@reduxjs/toolkit';
import { RootState } from '../reducers';

//TODOS
export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoState {
  todos: Array<Todo>;
}

export enum TodoActionTypes {
  GET_TODOS = 'GET_TODOS',
}

export interface GetTodosAction {
  type: TodoActionTypes.GET_TODOS;
  payload: Array<Todo>;
}

export type TodoThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  UnknownAction
>;

export type TodoActions = GetTodosAction;
