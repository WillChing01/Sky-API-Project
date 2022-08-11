import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Home from './Home';
import useQuery from '../../hooks/useQuery';

jest.mock('../../hooks/useQuery');

const mockQuery = useQuery as jest.MockedFunction<typeof useQuery>;
const mockRefetch = jest.fn();

describe('Home', () => {
    it('should display error message if API returns error', () => {
        mockQuery.mockReturnValue({
            isLoading: false,
            data: null,
            error: 'Error!',
            refetch: mockRefetch
        });

        render(<Home />);

        const error = screen.getByText('Error!');
        expect(error).toBeInTheDocument();
    });

    it('should display loading message if data is not loaded', () => {
        mockQuery.mockReturnValue({
            isLoading: true,
            data: null,
            error: '',
            refetch: mockRefetch
        });

        render(<Home />);

        const loading = screen.getByTestId('loading-spinner');
        expect(loading).toBeInTheDocument();
    });

    it('should display welcome message at top', () => {
        mockQuery.mockReturnValue({
            isLoading: false,
            data: {
                image: '',
                fact: ''
            },
            error: '',
            refetch: mockRefetch
        });

        render(<Home />);
        
        const title = screen.getByTestId('title');
        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent('Welcome!');
    });

    it('should display relevant message if data not present', () => {
        mockQuery.mockReturnValue({
            isLoading: false,
            data: null,
            error: '',
            refetch: mockRefetch
        });
        
        render(<Home />);

        const message = screen.getByText('No results found.');
        expect(message).toBeInTheDocument();
    });

    it('should display a picture and fact when data is returned from API', () => {
        mockQuery.mockReturnValue({
            isLoading: false,
            data: {
                image: 'image-src',
                fact: 'img-fact'
            },
            error: '',
            refetch: mockRefetch
        });

        render(<Home />);

        const photo = screen.getByRole('img');
        const photoFact = screen.getByText('img-fact');
        expect(photo).toHaveAttribute('src','image-src');
        expect(photoFact).toBeInTheDocument();
    });

    it('should refetch data on button click', () => {
        mockQuery.mockReturnValue({
            isLoading: false,
            data: {
                image: 'image-src',
                fact: 'img-fact'
            },
            error: '',
            refetch: mockRefetch
        });

        render(<Home />);
        const button = screen.getByRole('button');
        fireEvent.click(button);

        const photo = screen.getByRole('img');
        const photoFact = screen.getByText('img-fact');
        expect(photo).toHaveAttribute('src','image-src');
        expect(photoFact).toBeInTheDocument();
        expect(mockRefetch).toHaveBeenCalled();
    });
})