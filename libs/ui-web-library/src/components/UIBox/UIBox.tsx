import { SUIBox } from './UIBox.styles';
import { UIBoxProps } from './UIBox.types';

/**
 * UIBox
 * ----------------------------------------------------------------
 * @description - A simple element to use flexbox
 * @param {object} props - Properties of the component.
 * @parem {JSX.Element} props.children - A React JSX element.
 */
function UIBox(props: UIBoxProps) {
  const { children, ...rest } = props;
  return <SUIBox {...rest}>{children}</SUIBox>;
}

export default UIBox;
