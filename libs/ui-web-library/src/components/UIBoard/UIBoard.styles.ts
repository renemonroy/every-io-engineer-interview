import styled from 'styled-components';
import { flexbox, layout, space } from 'styled-system';

export const SUIBoard = styled.div`
  border: 0.063rem solid #0e1218;
  border-radius: 0.625rem;
  padding: 2rem;
  ${flexbox}
  ${layout}
  ${space}
`;

export const SUIBoardColumns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 2rem;
  margin-bottom: 2rem;
  ${flexbox}
  ${layout}
  ${space}
`;
