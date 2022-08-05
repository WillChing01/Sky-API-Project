import './Card.css';

const Card = ({title, body, email}) => {
    return (
        <div className='card-wrapper'>
            <h3>{title}</h3>
            {email && <div className='italics'>{email}</div>}
            <div>{body}</div>
        </div>
    );
};

export default Card;