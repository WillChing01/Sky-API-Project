import React from 'react';
import { useParams } from 'react-router-dom';
import { CommentData, PostData } from '../../contracts/query';

import useQuery from '../../hooks/useQuery';

import Card from '../Card/PostCard';
import ErrorBanner from '../ErrorBanner/ErrorBanner';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Post: React.FC = () => {
    const {id} = useParams();

    const limit = 5;

    const postQuery = useQuery<PostData>('https://jsonplaceholder.typicode.com/posts/'+id);
    const commentsQuery = useQuery<CommentData[]>('https://jsonplaceholder.typicode.com/posts/'+id+'/comments');
    
    if (postQuery.error || commentsQuery.error) return <ErrorBanner message={postQuery.error + ' ' + commentsQuery.error} />;

    if (postQuery.isLoading || commentsQuery.isLoading) return <LoadingSpinner />;

    return (
        <div className='community'>

            {
            postQuery.data ?
            <>
                <h2>
                    {postQuery.data.title}
                </h2>
                <div>
                    {postQuery.data.body}
                </div>
            </>
            : 'No results found.'
            }

            <br />

            <h3>Comments</h3>

            <div>
                {
                commentsQuery.data ? commentsQuery.data.slice(0,Math.min(limit,commentsQuery.data.length)).map(
                                         ({name, body, email, id}) =>
                                         <Card key={id} id={id} title={name} body={body} email={email}/>
                                     )
                                   : 'No comments found.'
                }
            </div>
        </div>
    );
};

export default Post;