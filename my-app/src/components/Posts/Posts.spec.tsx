// import React from 'react';
// import { render, screen } from '@testing-library/react';

// import Posts from './Posts';
// import Card from '../Card/Card';

// import useQuery from '../../hooks/useQuery';
// import ErrorBanner from '../ErrorBanner/ErrorBanner';
// import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

// jest.mock('../../hooks/useQuery');
// jest.mock('../Card/Card');
// jest.mock('../ErrorBanner/ErrorBanner');
// jest.mock('../LoadingSpinner/LoadingSpinner');

// const mockQuery = useQuery as jest.MockedFunction<typeof useQuery>;
// const mockCard = Card as jest.MockedFunction<typeof Card>;
// const mockErrorBanner = ErrorBanner as jest.MockedFunction<typeof ErrorBanner>;
// const mockLoadingSpinner = LoadingSpinner as jest.MockedFunction<typeof LoadingSpinner>;

// describe('Posts', () => {
//     it('should display error message if API returns error', () => {
//         mockQuery.mockReturnValue({
//             isLoading: false,
//             data: null,
//             error: 'Error!'
//         });
//         mockErrorBanner.mockReturnValue(
//             <>Error!</>
//         );

//         render(<Posts />);

//         const error = screen.getByText('Error!');
//         expect(error).toBeInTheDocument();
//     });

//     it('should display loading message if data is not loaded', () => {
//         mockQuery.mockReturnValue({
//             isLoading: true,
//             data: null,
//             error: ''
//         });
//         mockLoadingSpinner.mockReturnValue(
//             <>Loading...</>
//         );

//         render(<Posts />);

//         const loading = screen.getByText('Loading...');
//         expect(loading).toBeInTheDocument();
//     });

//     it('should display message if no results returned', () => {
//         mockQuery.mockReturnValue({
//             isLoading: false,
//             data: null,
//             error: ''
//         });

//         render(<Posts />);

//         const title = screen.getByTestId('title');
//         const noResults = screen.getByText('No results found.');
//         expect(title).toBeInTheDocument();
//         expect(title).toHaveTextContent('Posts');
//         expect(noResults).toBeInTheDocument();
//     });

//     it('should render a post if returned from the API', () => {
//         mockQuery.mockReturnValue({
//             isLoading: false,
//             data: [{
//                 title: 'postTitle',
//                 body: 'postBody',
//                 id: 0
//             }],
//             error: ''
//         });
//         mockCard.mockReturnValue(
//             <>
//                 <div>postTitle</div>
//                 <div>postBody</div>
//             </>
//         );

//         render(<Posts />);
//         const title = screen.getByTestId('title');
//         const postTitle = screen.getByText('postTitle');
//         const postBody = screen.getByText('postBody');

//         expect(title).toBeInTheDocument();
//         expect(title).toHaveTextContent('Posts');
//         expect(postTitle).toBeInTheDocument();
//         expect(postBody).toBeInTheDocument();
//     });
// });