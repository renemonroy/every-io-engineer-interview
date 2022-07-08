import { IUIButtonProps } from './UIButton.types';
import { SUIButton } from './UIButton.styles';

function UIButton(props: IUIButtonProps): JSX.Element {
  const { children, ...rest } = props;
  return <SUIButton {...rest}>{children}</SUIButton>;
}

UIButton.defaultProps = {
  color: 'primary',
};

export default UIButton;
