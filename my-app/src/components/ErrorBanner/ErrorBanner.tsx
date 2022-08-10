import React from 'react';

type ErrorBannerProps = {
    message: string
};

const ErrorBanner: React.FC<ErrorBannerProps> = ({ message }) => {
    return (
        <div className='text-center text-danger'>
            <h3>{message}</h3>
        </div>
    );
};

export default ErrorBanner;