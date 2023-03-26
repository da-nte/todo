import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './../../types/RootState';

export const baseSelector = (state: RootState) => state.todo;

export const TodoListSelector = createSelector(
  baseSelector,
  state => state.todolist,
);
