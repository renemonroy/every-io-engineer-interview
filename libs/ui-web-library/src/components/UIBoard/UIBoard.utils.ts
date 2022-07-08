import { IBoard, IBoardTodo } from './UIIBoard.types';

/**
 * moveTodoToPrevious
 * ----------------------------------------------------------------
 * @returns - new board with todos reordered
 */
export function moveTodoToPrevious(
  board: IBoard,
  todo: IBoardTodo,
  colIndex: number
) {
  return board.map((curr, i) => {
    if (i === colIndex - 1) curr.todos.push(todo);
    if (i === colIndex)
      curr.todos.splice(
        curr.todos.findIndex((t) => t.id === todo.id),
        1
      );
    return curr;
  });
}

/**
 * moveTodoToNext
 * ----------------------------------------------------------------
 * @returns - new board with todos reordered
 */
export function moveTodoToNext(
  board: IBoard,
  todo: IBoardTodo,
  colIndex: number
) {
  return board.map((curr, i) => {
    if (i === colIndex + 1) curr.todos.push(todo);
    if (i === colIndex)
      curr.todos.splice(
        curr.todos.findIndex((t) => t.id === todo.id),
        1
      );
    return curr;
  });
}

/**
 * addNewTodo
 * ----------------------------------------------------------------
 * @returns - adds a new todo into specific column
 */
export function addNewTodo(board: IBoard, todo: IBoardTodo, colIndex: number) {
  return board.map((curr, i) => {
    if (i === colIndex) curr.todos.push(todo);
    return curr;
  });
}
