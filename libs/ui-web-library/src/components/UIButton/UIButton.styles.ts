import styled from 'styled-components';
import { space } from 'styled-system';
import { IUIButtonProps } from './UIButton.types';
import { getBgColor, getDisabledBgColor } from './UIButton.utils';

export const SUIButton = styled.button`
  background-color: ${({ color }: IUIButtonProps) => getBgColor(color)};
  border: 0 none;
  border-radius: 0.313rem;
  color: #ffffff;
  cursor: pointer;
  padding: 0.75rem;
  ${space};

  &:disabled {
    background-color: ${({ color }: IUIButtonProps) =>
      getDisabledBgColor(color)};
    cursor: default;
  }
`;
