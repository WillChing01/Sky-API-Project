import { useParams } from 'react-router-dom';

import useQuery from '../../hooks/usePosts';

import Card from '../Card/Card';

const Post = () => {
    const {id} = useParams();

    const postQuery = useQuery('https://jsonplaceholder.typicode.com/posts/'+id);
    const commentsQuery = useQuery('https://jsonplaceholder.typicode.com/posts/'+id+'/comments');
    if (postQuery.error || commentsQuery.error) return 'Something went wrong!';

    if (postQuery.isLoading || commentsQuery.isLoading || !postQuery.data || !commentsQuery.data) return 'Loading...';

    return (
        <div className='community'>
            <h2>{postQuery.data.title}</h2>
            <div>
                {postQuery.data.body}
            </div>

            <h3>Comments</h3>

            <ul>
                {commentsQuery.data.map(({name, body, email, id}) =>
                    <Card key={id} title={name} body={body} email={email}/>
                )}
            </ul>
        </div>
    );
};

export default Post;