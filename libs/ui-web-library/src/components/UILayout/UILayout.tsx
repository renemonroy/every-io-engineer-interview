import { SUILayout } from './UILayout.styles';
import { UILayoutProps } from './UILayout.types';

/**
 * UILayout
 * ----------------------------------------------------------------
 * @description - Displays content in a layout wrapper
 * @param {object} props - Properties of the component.
 * @parem {JSX.Element} props.children - A React JSX element.
 */
function UILayout(props: UILayoutProps) {
  const { children, ...rest } = props;
  return <SUILayout {...rest}>{children}</SUILayout>;
}

export default UILayout;
