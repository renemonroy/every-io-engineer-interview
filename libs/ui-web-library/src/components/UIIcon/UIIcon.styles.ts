import styled from 'styled-components';
import { IUIIconSpan } from './UIIcon.types';

export const SUIIcon = styled.span`
  display: inline-block;
  svg {
    height: ${({ height }: IUIIconSpan) => height || '1.75rem'};
    width: ${({ width }: IUIIconSpan) => width || '1.75rem'};
    margin: -0.25rem 0 -0.5rem;

    & > path {
      fill: ${({ color }: IUIIconSpan) => color || '#ffffff'};
    }
  }
`;
