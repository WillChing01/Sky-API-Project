import React from 'react';

type Props = {
    src: string
};

const PhotoCard: React.FC<Props> = ({src}) => {
    return (
        <img src={src} />
    );
};

export default PhotoCard;