import { useEffect, useState } from 'react';
import { UIBoard, UIBoardProps, UILayout } from 'every-io@ui-web-library';
import initialStates from '../../data/states.json';
import { createBoardStates } from '../../utils/createBoardStates';
import { IState } from './App.types';

function App() {
  console.log('rendering...');
  const [states, setStates] = useState<IState[] | UIBoardProps.IBoard>([]);

  useEffect(() => {
    (async function fetchIssues() {
      try {
        const response = await fetch(
          'https://api.github.com/repos/every-io/demo-issues/issues'
        );
        const res = await response.json();
        const boardStates = createBoardStates(res, initialStates);
        setStates(boardStates);
      } catch (err) {
        console.log('error:', err);
      }
    })();
  }, []);

  return (
    <UILayout maxWidth={[768, null, null, 1024]}>
      <h1>Welcome to the Every.io Code Challenge</h1>
      {states ? <UIBoard states={states} /> : null}
    </UILayout>
  );
}

export default App;
