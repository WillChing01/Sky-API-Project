import React from 'react';
import { render, screen } from '@testing-library/react';

import Home from './Home';
import useQuery from '../../hooks/useQuery';
import ErrorBanner from '../ErrorBanner/ErrorBanner';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import PhotoCard from '../PhotoCard/PhotoCard';

jest.mock('../../hooks/useQuery');
jest.mock('../ErrorBanner/ErrorBanner');
jest.mock('../LoadingSpinner/LoadingSpinner');
jest.mock('../PhotoCard/PhotoCard');

const mockQuery = useQuery as jest.MockedFunction<typeof useQuery>;
const mockErrorBanner = ErrorBanner as jest.MockedFunction<typeof ErrorBanner>;
const mockLoadingSpinner = LoadingSpinner as jest.MockedFunction<typeof LoadingSpinner>;
const mockPhotoCard = PhotoCard as jest.MockedFunction<typeof PhotoCard>;

describe('Home', () => {
    it('should display error message if API returns error', () => {
        mockQuery.mockReturnValue({
            isLoading: false,
            data: null,
            error: 'Error!'
        });
        mockErrorBanner.mockReturnValue(
            <>Error!</>
        );

        render(<Home />);

        const error = screen.getByText('Error!');
        expect(error).toBeInTheDocument();
    });

    it('should display loading message if data is not loaded', () => {
        mockQuery.mockReturnValue({
            isLoading: true,
            data: null,
            error: ''
        });
        mockLoadingSpinner.mockReturnValue(
            <>Loading...</>
        );

        render(<Home />);

        const loading = screen.getByText('Loading...');
        expect(loading).toBeInTheDocument();
    });

    it('should display welcome message at top', () => {
        mockQuery.mockReturnValue({
            isLoading: false,
            data: {
                image: '',
                fact: ''
            },
            error: ''
        });
        mockPhotoCard.mockReturnValue(
            <></>
        );

        render(<Home />);
        
        const title = screen.getByTestId('title');
        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent('Welcome!');
    });

    it('should display relevant message if data not present', () => {
        mockQuery.mockReturnValue({
            isLoading: false,
            data: null,
            error: ''
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
                fact: 'fact'
            },
            error: ''
        });
        mockPhotoCard.mockReturnValue(
            <>
                <img src='image-src' />
                <div data-testid='img-fact'>fact</div>
            </>
        );

        render(<Home />);

        const photo = screen.getByRole('img');
        const photoFact = screen.getByTestId('img-fact');
        expect(photo).toHaveAttribute('src','image-src');
        expect(photoFact).toHaveTextContent('fact');
    });
})