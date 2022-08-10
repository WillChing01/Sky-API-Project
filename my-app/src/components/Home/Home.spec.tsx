import React from 'react';
import { render, screen } from '@testing-library/react';

import Home from './Home';

describe('Home', () => {
    it('should display welcome message at top', () => {
        render(<Home />);
        
        const title = screen.getByTestId('title');
        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent('Welcome!');
    })
})