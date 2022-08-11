import React from 'react';
import { render, screen } from '@testing-library/react';

import Photos from './Photos';
import PhotoCard from '../PhotoCard/PhotoCard';
import ErrorBanner from '../ErrorBanner/ErrorBanner';

import useQuery from '../../hooks/useQuery';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

jest.mock('../../hooks/useQuery');
jest.mock('../PhotoCard/PhotoCard');
jest.mock('../ErrorBanner/ErrorBanner');
jest.mock('../LoadingSpinner/LoadingSpinner');

const mockQuery = useQuery as jest.MockedFunction<typeof useQuery>;
const mockPhotoCard = PhotoCard as jest.MockedFunction<typeof PhotoCard>;
const mockErrorBanner = ErrorBanner as jest.MockedFunction<typeof ErrorBanner>;
const mockLoadingSpinner = LoadingSpinner as jest.MockedFunction<typeof LoadingSpinner>;

describe('Photos', () => {
    it('should display error message if API returns error', () => {
        mockQuery.mockReturnValue({
            isLoading: false,
            data: null,
            error: 'Error!'
        });
        mockErrorBanner.mockReturnValue(
            <>Error!</>
        );

        render(<Photos />);

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

        render(<Photos />);

        const loading = screen.getByText('Loading...');
        expect(loading).toBeInTheDocument();
    });

    it('should display message if no results returned', () => {
        mockQuery.mockReturnValue({
            isLoading: false,
            data: null,
            error: ''
        });

        render(<Photos />);

        const title = screen.getByTestId('title');
        const noResults = screen.getByText('No results found.');
        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent('Photos');
        expect(noResults).toBeInTheDocument();
    });

    it('should render a photo if returned from the API', () => {
        mockQuery.mockReturnValue({
            isLoading: false,
            data: [{
                albumId: 0,
                id: 0,
                title: 'photoTitle',
                url: 'photoUrl',
                thumbnailUrl: 'photoThumbnailUrl'
            }],
            error: ''
        });
        mockPhotoCard.mockReturnValue(
            <img src='photoThumbnailUrl'></img>
        );

        render(<Photos />);

        const title = screen.getByTestId('title');
        const photo = screen.getByRole('img');
        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent('Photos');
        expect(photo).toBeInTheDocument();
        expect(photo).toHaveAttribute('src','photoThumbnailUrl');
    });
});