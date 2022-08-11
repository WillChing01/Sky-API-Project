import React from 'react';

import './LoadingSpinner.css';

const LoadingSpinner: React.FC = () => {
    return (
        <div className='text-center' data-testid='loading-spinner'>
            <div className='spinner-border spinner-style' />
        </div>
    );
};

export default LoadingSpinner;