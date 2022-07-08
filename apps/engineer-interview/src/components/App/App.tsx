import { UIBoard, UILayout } from 'every-io@ui-web-library';
import states from '../../data/states.json';

export function App(): JSX.Element {
  return (
    <UILayout maxWidth={[768, null, null, 1024]}>
      <h1>Welcome to the Every.io Code Challenge</h1>
      <UIBoard states={states} />
    </UILayout>
  );
}

export default App;
