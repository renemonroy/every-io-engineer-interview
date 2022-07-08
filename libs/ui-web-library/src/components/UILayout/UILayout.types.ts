import { LayoutProps, PositionProps } from 'styled-system';

export interface UILayoutProps extends PositionProps, LayoutProps {
  children: React.ReactNode;
}
