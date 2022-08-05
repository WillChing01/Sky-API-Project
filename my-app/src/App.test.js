import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import usePosts from './hooks/usePosts';

jest.mock('./hooks/usePosts');

test('check for error message', () => {
    usePosts.mockReturnValue({
        error: true
    });
    render(<App />);
    const error = screen.getByText('Something went wrong!');
    expect(error).toBeInTheDocument();
});

test('check for no results message', () => {
    usePosts.mockReturnValue({
        isLoading: false,
        data: null
    });
    render(<App />);
    const title = screen.getByTestId('title');
    const noResults = screen.getByText('No results found.');
    expect(title).toBeInTheDocument();
    expect(noResults).toBeInTheDocument();
});

test('check for loading text', () => {
    usePosts.mockReturnValue({
        isLoading: true,
        data: null,
        error: null
    });
    render(<App />);
    const loading = screen.getByText('Loading...');
    expect(loading).toBeInTheDocument();
});

test('check for correct title', () => {
    usePosts.mockReturnValue({
        isLoading: false,
        data: [{title: 'testTitle', body: 'testBody', id: 1}],
        error: null
    })
    render(<App />);
    const title = screen.getByTestId('title');
    const postTitle = screen.getByText('testTitle');
    const postBody = screen.getByText('testBody');
    screen.debug();
    expect(title).toBeInTheDocument();
    expect(postTitle).toBeInTheDocument();
    expect(postBody).toBeInTheDocument();
});