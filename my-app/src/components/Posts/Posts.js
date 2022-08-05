import Card from '../Card/Card';
import useQuery from '../../hooks/usePosts';

import './Posts.css';

const Posts = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const limit = 5;
    const {isLoading, data, error} = useQuery(url);

    if (error) return 'Something went wrong!';

    if (isLoading) return 'Loading...';

    return (
        <div className='community'>
            <h1 className='title' data-testid='title'>Posts</h1>
            {data ? 
            data.slice(0,limit).map(({title, body, id}) => <Card key={id} title={title} body={body} />) : 
            'No results found.'}
        </div>
    );
};

export default Posts;