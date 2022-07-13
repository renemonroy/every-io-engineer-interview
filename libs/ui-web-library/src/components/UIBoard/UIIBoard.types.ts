import { LayoutProps, PositionProps } from 'styled-system';

export interface IBoardTodo {
  id: string;
  title: string;
}

export type IBoardTodos = IBoardTodo[];

export interface IBoardState {
  id: string;
  title: string;
  todos: IBoardTodos;
}

export type IBoard = IBoardState[];

export interface UIBoardProps extends PositionProps, LayoutProps {
  states: IBoard;
}
