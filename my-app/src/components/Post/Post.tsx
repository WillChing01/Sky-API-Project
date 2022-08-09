import React from 'react';
import { useParams } from 'react-router-dom';
import { CommentData, PostData } from '../../contracts/query';

import useQuery from '../../hooks/useQuery';

import Card from '../Card/Card';

const Post: React.FC = () => {
    const {id} = useParams();

    const limit = 5;

    const postQuery = useQuery<PostData>('https://jsonplaceholder.typicode.com/posts/'+id);
    const commentsQuery = useQuery<CommentData[]>('https://jsonplaceholder.typicode.com/posts/'+id+'/comments');
    
    if (postQuery.error || commentsQuery.error) return <>Something went wrong!</>;

    if (postQuery.isLoading || commentsQuery.isLoading || !postQuery.data || !commentsQuery.data.length) return <>Loading...</>;

    return (
        <div className='community'>
            <h2>{postQuery.data.title}</h2>
            <div>
                {postQuery.data.body}
            </div>

            <h3>Comments</h3>

            <div>
                {
                commentsQuery.data.slice(0,Math.min(limit,commentsQuery.data.length)).map(
                    ({name, body, email, id}) =>
                    <Card key={id} id={id} title={name} body={body} email={email}/>
                )
                }
            </div>
        </div>
    );
};

export default Post;