export interface IIssue {
  id: string;
  title: string;
  state?: string;
}

export interface IState {
  id: string;
  title: string;
  keyname: string;
  todos: IIssue[];
}
