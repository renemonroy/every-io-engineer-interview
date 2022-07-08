import styled from 'styled-components';
import { flexbox } from 'styled-system';

export const SUICard = styled.div`
  background-color: #ffffff;
  border-radius: 0.313rem;
  box-shadow: 0 0.063rem 0.25rem rgba(0, 0, 0, 0.15);
  display: flex;
  margin-bottom: 1rem;
  justify-content: space-between;
  padding: 1rem;
  ${flexbox}

  &:last-child {
    margin-bottom: 0;
  }
`;
