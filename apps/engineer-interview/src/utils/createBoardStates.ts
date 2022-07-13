import { IIssue, IState } from '../components/App/App.types';

export function createBoardStates(res: IIssue[], defaultStates: IState[]) {
  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < defaultStates.length; j++) {
      if (defaultStates[j].keyname === res[i].state) {
        const { id, title, ...rest } = res[i];
        if (defaultStates[j].todos.find(({ id }) => id !== res[i].id)) {
          defaultStates[j].todos.push({ id: id.toString(), title });
        }
      }
    }
  }
  return defaultStates;
}
