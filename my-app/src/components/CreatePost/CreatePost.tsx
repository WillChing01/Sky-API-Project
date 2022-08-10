import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

//import useCreate from '../../hooks/useCreate';

const CreatePost: React.FC = () => {

    const [formInfo, setFormInfo] = useState({});

    let navigate = useNavigate();

    const updateFormInfo = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormInfo({...formInfo, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {    
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const postData = {...formInfo, userId: 0};

        axios.post(url, postData)
        .then((response) => {
            console.log(response.data);
            alert('New post created with title: '+response.data.title);
        })
        .catch((error) => {
            if (error.response) {
                console.log(error.response.data);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        });

        navigate('/posts', {replace: true});
        
        e.preventDefault();
    };

    return (
        <div className='community'>
            <h1 className='title'>Create Post</h1>
            <form className='title' onSubmit={handleSubmit}>
                <div>
                    <label><h3>Title</h3></label>
                </div>
                <div>
                    <input
                        name='title'
                        type='text'
                        onChange={(e) => updateFormInfo(e)} 
                        required
                    />
                </div>
                <div>
                    <label><h3>Body</h3></label>
                </div>

                <div>
                    <textarea
                        rows={10}
                        cols={100}
                        onChange={(e) => updateFormInfo(e)}
                        required
                    ></textarea>
                </div>
                <button type='submit' className='btn btn-secondary'>Create</button>
            </form>
        </div>
    );
};

export default CreatePost;