export interface IUIButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: 'primary' | string;
  disabled?: boolean;
  innerRef?: React.Ref<HTMLButtonElement>;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}
