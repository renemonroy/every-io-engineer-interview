import { FlexProps, SpaceProps } from 'styled-system';

export interface UIBoxProps extends FlexProps, SpaceProps {
  children: React.ReactNode;
}
