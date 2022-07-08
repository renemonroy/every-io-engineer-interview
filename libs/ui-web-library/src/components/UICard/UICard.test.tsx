import { render } from '@testing-library/react';
import UICard from './UICard';

describe('UICard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UICard title="Todo Example" />);
    expect(baseElement).toBeTruthy();
  });
});
