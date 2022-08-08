import {useNavigate} from 'react-router-dom';

import './Card.css';

const Card = ({id, title, body, email}) => {

    let navigate = useNavigate();

    const handleClick = () => {
        if (!email) navigate('/posts/'+id);
    };

    const getClassName = () => {
        const className = email ? 'card-wrapper'
                                : 'card-wrapper post';
        return className;
    };

    return (
        <div className={getClassName()} onClick={handleClick}>
            <h3>{title}</h3>
            {email && <div className='italics'>{email}</div>}
            <div>{body}</div>
        </div>
    );
};

export default Card;