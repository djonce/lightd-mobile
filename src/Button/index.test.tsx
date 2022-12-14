import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './index';

describe('<Button />', () => {
  it('render Foo with dumi', () => {
    const msg = 'dumi';

    render(<Button title={msg} />);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
