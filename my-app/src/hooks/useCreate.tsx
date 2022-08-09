import {useEffect, useState} from 'react';
import axios from 'axios';

type PostData = {
    title: string,
    body: string,
    userId: number
};

type ReturnData = {
    id: number,
    title: string,
    body: string,
    userId: number
};

const useCreate : (postData: PostData) => {isLoading: boolean; data: ReturnData; error: string;} = (postData) => {
    const [data, setData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const url = 'https://jsonplaceholder.typicode.com/posts';

    useEffect(() => {
        setIsLoading(true);
        axios.post(url, postData)
        .then((response) => {
            //console.log(response.data);
            setData([response.data]);
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
    },[postData]);

    return {
        isLoading: isLoading,
        data: data,
        error: error
    };
};

export default useCreate;