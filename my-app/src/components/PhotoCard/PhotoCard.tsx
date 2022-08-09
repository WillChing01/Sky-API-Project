import React from 'react';

import './PhotoCard.css';

type Props = {
    src: string
};

const PhotoCard: React.FC<Props> = ({src}) => {
    return (
        <img className='padded-border' src={src} />
    );
};

export default PhotoCard;