import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css';

type Props = {
    id: number,
    title?: string,
    body?: string,
    email?: string
};

const Card: React.FC<Props> = ({id, title, body, email}) => {

    const getClassName = () => {
        const className = email ? 'card-wrapper'
                                : 'card-wrapper post';
        return className;
    };

    return (
        <div className={getClassName()}>
            <h3>{title}</h3>
            {email && <div className='italics'>{email}</div>}
            <div>{body}</div>
            {!email && <Link to={'/posts/'+id}>Read more</Link>}
        </div>
    );
};

export default Card;