export type TIcon = 'Plus' | 'LeftArrow' | 'RightArrow';

export interface IUIIconSpan {
  name: TIcon;
  color?: string;
  width?: string;
  height?: string;
}

export interface IUIIcon extends React.HTMLAttributes<HTMLElement> {
  name?: TIcon;
  color?: string;
}
