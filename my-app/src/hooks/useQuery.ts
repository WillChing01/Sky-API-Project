import {useEffect, useState} from 'react';
import axios from 'axios';

type QueryResult<T> =  {isLoading: boolean; data: T; error: string;}

const useQuery = <T>(url: string): QueryResult<T> => {
    const [data, setData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
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
            setError(error);
        });
    },[url]);

    return {
        isLoading: isLoading,
        data: data,
        error: error
    };
};

export default useQuery;