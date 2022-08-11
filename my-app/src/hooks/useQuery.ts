import {useEffect, useState} from 'react';
import axios from 'axios';

type QueryResult<T> =  {isLoading: boolean; data: T; error: string; refetch: () => void;}

const useQuery = <T>(url: string): QueryResult<T> => {
    const [data, setData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const fetch = () => {
        setIsLoading(true);
        axios.get(url)
        .then((response) => {
            //console.log(response.data);
            setData(response.data);
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
            setError(error.message);
        });
    };

    useEffect(() => {
        fetch();
    },[url]);

    return {
        isLoading: isLoading,
        data: data,
        error: error,
        refetch: fetch
    };
};

export default useQuery;