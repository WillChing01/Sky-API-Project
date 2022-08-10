import React from 'react';
import { render, screen } from '@testing-library/react';

import Post from './Post';
import useQuery from '../../hooks/useQuery';
import Card from '../Card/Card';

jest.mock('../../hooks/useQuery');
jest.mock('../Card/Card');

const mockQuery = useQuery as jest.MockedFunction<typeof useQuery>;
const mockCard = Card as jest.MockedFunction<typeof Card>;

describe('Post', () => {
    it('should display error message if API returns error', () => {
        mockQuery.mockReturnValue({
            isLoading: false,
            data: null,
            error: 'Error!'
        });

        render(<Post />);

        const error = screen.getByText('Something went wrong!');
        expect(error).toBeInTheDocument();
    });

    it('should display loading message if data is not loaded', () => {
        mockQuery.mockReturnValue({
            isLoading: true,
            data: null,
            error: ''
        });

        render(<Post />);

        const loading = screen.getByText('Loading...');
        expect(loading).toBeInTheDocument();
    });

    it('should display relevant messages if data is not present', () => {
        mockQuery.mockReturnValue({
            isLoading: false,
            data: null,
            error: ''
        });
        mockCard.mockReturnValue(<></>);

        render(<Post />);

        const postMessage = screen.getByText('No results found.');
        const commentsMessage = screen.getByText('No comments found.');
        expect(postMessage).toBeInTheDocument();
        expect(commentsMessage).toBeInTheDocument();
    });

    it('should display post title and body when returned from API', () => {
        mockQuery.mockReturnValueOnce({
            isLoading: false,
            data: {
                title: 'post-title',
                body: 'post-body',
                id: 0
            },
            error: ''
        });
        mockQuery.mockReturnValueOnce({
            isLoading: false,
            data: [],
            error: ''
        });
        
        render(<Post />);

        const postTitle = screen.getByText('post-title');
        const postBody = screen.getByText('post-body');
        expect(postTitle).toBeInTheDocument();
        expect(postBody).toBeInTheDocument();
    });

    it('should display a comment when returned from the API', () => {
        mockQuery.mockReturnValueOnce({
            isLoading: false,
            data: null,
            error: ''
        });
        mockQuery.mockReturnValueOnce({
            isLoading: false,
            data: [{
                id: 0,
                name: 'comment-name',
                body: 'comment-body',
                email: 'comment-email',
            }],
            error: ''
        });
        mockCard.mockReturnValue(
            <>
                <div>comment-name</div>
                <div>comment-body</div>
                <div>comment-email</div>
            </>
        );

        render(<Post />);
        
        const commentHeader = screen.getByText('Comments');
        const commentTitle = screen.getByText('comment-name');
        const commentBody = screen.getByText('comment-body');
        const commentEmail = screen.getByText('comment-email');
        expect(commentHeader).toBeInTheDocument();
        expect(commentTitle).toBeInTheDocument();
        expect(commentBody).toBeInTheDocument();
        expect(commentEmail).toBeInTheDocument();
    });
});