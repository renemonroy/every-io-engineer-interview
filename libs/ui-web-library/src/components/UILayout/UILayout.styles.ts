import styled from 'styled-components';
import { flexbox, layout } from 'styled-system';

export const SUILayout = styled.div`
  display: flex;
  flex-direction: column;
  font-family: BlinkMacSystemFont, Inter, Segoe UI, Helvetica Neue, sans-serif;
  margin: 0 auto;
  ${flexbox}
  ${layout}

  & > * {
    margin-bottom: 1rem;
  }
`;
