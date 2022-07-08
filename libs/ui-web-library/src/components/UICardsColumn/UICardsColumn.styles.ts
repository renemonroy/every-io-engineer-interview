import styled from 'styled-components';
import { flexbox } from 'styled-system';

export const SUICardsColumn = styled.div`
  background-color: #f9f9f9;
  border: 0.063rem solid #e9e9e9;
  border-radius: 0.625rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem;
  ${flexbox}

  h2 {
    text-align: center;
  }
`;
