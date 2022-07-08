import { render } from '@testing-library/react';
import UICardsColumn from './UICardsColumn';

describe('UICardsColumn', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UICardsColumn title="Column Example" />);
    expect(baseElement).toBeTruthy();
  });
});
