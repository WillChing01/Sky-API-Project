import React from 'react';
import { useParams } from 'react-router-dom';
import { CommentData, PostData } from '../../contracts/query';

import useQuery from '../../hooks/useQuery';
import PostCard from '../Card/PostCard';

import ErrorBanner from '../ErrorBanner/ErrorBanner';
import LoadingPostCard from '../LoadingPostCard/LoadingPostCard';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Post: React.FC = () => {
    const {id} = useParams();

    const limit = 5;

    const postQuery = useQuery<PostData>('https://jsonplaceholder.typicode.com/posts/'+id);
    const commentsQuery = useQuery<CommentData[]>('https://jsonplaceholder.typicode.com/posts/'+id+'/comments');
    
    if (postQuery.error || commentsQuery.error) return <ErrorBanner message={postQuery.error + ' ' + commentsQuery.error} />;

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
            : <LoadingPostCard number={1} />
            }

            <br />

            <h3>Comments</h3>

            <div>
                {
                commentsQuery.data ? commentsQuery.data.slice(0,Math.min(limit,commentsQuery.data.length)).map(
                                         ({name, body, email, id}) =>
                                         <PostCard key={id} id={id} title={name} body={body} email={email} />
                                     )
                                   : <LoadingPostCard number={3} />
                }
            </div>
        </div>
    );
};

export default Post;