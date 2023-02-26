import { Input, Button } from '@mui/material'
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

function Comments() {

    const [value, setValue] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    const comments = useSelector(store => store.review.comments)

    useEffect(() => {
        setValue(comments ? comments : '')
    },[])

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    //allow form-like submission with key listener
    const handleKeyDown = (e) => {
        if (e.key == "Enter") {
            handleClick(e);
        }
    }

    //set reducer with input value
    const handleClick = (e) => {
        e.preventDefault();
        dispatch({
            type: 'SET_COMMENTS',
            payload: value
        })
        setValue('');
        history.push('/submit')
    }

    return (
        <div>
            <p>Any comments you'd like to leave?</p>
            <Input onKeyDown={handleKeyDown} autoFocus={true} type="text" name="Comments" onChange={handleChange} value={value} />
            <Button onClick={handleClick}>NEXT</Button>
            <Button onClick={history.goBack}>Go Back</Button>
        </div>
    )
}

export default Comments;