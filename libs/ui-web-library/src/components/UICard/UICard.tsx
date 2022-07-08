import { SUICard } from './UICard.styles';
import { UICardProps } from './UICard.types';

/**
 * UICard
 * ----------------------------------------------------------------
 * @description - Displays content in card, expecting a title.
 * @param {object} props - Properties of the component.
 * @param {string} props.title - Text for task description.
 * @parem {JSX.Element} props.children - A React JSX element.
 */
function UICard(props: UICardProps) {
  const { children } = props;
  return <SUICard>{children}</SUICard>;
}

export default UICard;
