import {useEffect, useState} from 'react';
import axios from 'axios';

const useQuery = (url) => {
    const [posts, setPosts] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        axios.get(url)
        .then((response) => {
            //console.log(response.data);
            setPosts(response.data);
            setIsLoading(false);
        })
        .catch((error) => {
            if (error.response) {
                console.log(error.response.data);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
            setError(error);
        });
    },[]);

    return {
        isLoading: isLoading,
        data: posts,
        error: error
    };
};

export default useQuery;