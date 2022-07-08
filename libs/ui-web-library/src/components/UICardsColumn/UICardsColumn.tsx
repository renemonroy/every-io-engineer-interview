import { UICardsColumnProps } from './UICardsColumn.types';
import { SUICardsColumn } from './UICardsColumn.styles';

/**
 * UICardsColumn
 * ----------------------------------------------------------------
 * @description - Displays content in column, expecting a title.
 * @param {object} props - Properties of the component.
 * @param {string} props.title - Title text for the column.
 * @param {JSX.Element} props.children - A React JSX element.
 */
function UICardsColumn(props: UICardsColumnProps): JSX.Element {
  const { children, title } = props;
  return (
    <SUICardsColumn>
      <h2>{title}</h2>
      {children}
    </SUICardsColumn>
  );
}

export default UICardsColumn;
