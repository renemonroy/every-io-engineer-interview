import * as icons from './UIIcon.constants';
import { IUIIconSpan } from './UIIcon.types';
import { SUIIcon } from './UIIcon.styles';

function UIIcon({ name = 'Plus', color = '#fff', height, width }: IUIIconSpan) {
  const SVGIcon = icons[name];
  return (
    <SUIIcon name={name} color={color} height={height} width={width}>
      <SVGIcon />
    </SUIIcon>
  );
}

export default UIIcon;
