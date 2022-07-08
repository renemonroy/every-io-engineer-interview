import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import UIButton from '../UIButton/UIButton';
import UIBox from '../UIBox/UIBox';
import UICard from '../UICard/UICard';
import UICardsColumn from '../UICardsColumn/UICardsColumn';
import UITextfield from '../UITextfield/UITextField';
import UIIcon from '../UIIcon/UIIcon';
import { SUIBoard, SUIBoardColumns } from './UIBoard.styles';
import { UIBoardProps, IBoardState, IBoardTodo } from './UIIBoard.types';
import {
  addNewTodo,
  moveTodoToNext,
  moveTodoToPrevious,
} from './UIBoard.utils';

/**
 * UIBoard
 * ----------------------------------------------------------------
 * @description - Displays a board for multiple columns in row.
 * @param {object} props - Properties of the component.
 * @parem {JSX.Element} props.children - A React JSX element.
 */
function UIBoard(props: UIBoardProps): JSX.Element {
  const [states, setStates] = useState(props.states);
  const [newTodoValue, setNewTodoValue] = useState('');

  function moveToPrevious(todo: IBoardTodo, colIndex: number) {
    if (colIndex === 0) return;
    setStates(moveTodoToPrevious(states, todo, colIndex));
  }

  function moveToNext(todo: IBoardTodo, colIndex: number) {
    if (colIndex === states.length - 1) return;
    setStates(moveTodoToNext(states, todo, colIndex));
  }

  function onTextfieldChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewTodoValue(e.target.value);
  }

  function handleNewTodo(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const todo = { id: uuidv4(), title: newTodoValue, isDone: false };
    setStates(addNewTodo(states, todo, 0));
    setNewTodoValue('');
  }

  return (
    <SUIBoard {...props}>
      <SUIBoardColumns>
        {states.length > 1 &&
          states.map((column: IBoardState, colIndex: number) => (
            <UICardsColumn key={column.id} title={column.title}>
              {column.todos.map((task) => (
                <UICard key={task.id}>
                  <UIButton
                    color="red"
                    disabled={colIndex === 0}
                    onClick={moveToPrevious.bind(null, task, colIndex)}
                  >
                    <UIIcon name="LeftArrow" />
                  </UIButton>
                  <p>{task.title}</p>
                  <UIButton
                    color="green"
                    disabled={colIndex === states.length - 1}
                    onClick={moveToNext.bind(null, task, colIndex)}
                  >
                    <UIIcon name="RightArrow" />
                  </UIButton>
                </UICard>
              ))}
            </UICardsColumn>
          ))}
      </SUIBoardColumns>
      <UIBox>
        <UITextfield
          onChange={onTextfieldChange}
          placeholder="Add Task"
          value={newTodoValue}
        />
        <UIButton onClick={handleNewTodo}>
          <UIIcon name="Plus" />
        </UIButton>
      </UIBox>
    </SUIBoard>
  );
}

export default UIBoard;
