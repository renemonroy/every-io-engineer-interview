import { SUITextfield } from './UITextfield.styles';
import { IUITextFieldProps } from './UITextfield.types';

function UITextfield(props: IUITextFieldProps): JSX.Element {
  return <SUITextfield {...props} type="text" />;
}

export default UITextfield;
