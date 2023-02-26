import { Input, Button, List, ListItem } from '@mui/material'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import './Submit.css';

function Submit() {

    const [value, setValue] = useState('');
    const history = useHistory();
    const review = useSelector(store => store.review);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleBadData = () => {
        alert('bad data');
        history.push('/');
    }

    const handleClick = (e) => {
        (review.feeling > 5 || review.understanding > 5 || review.support > 5
            || review.feeling < 1 || review.understanding < 1 || review.support < 1
            || isNaN(review.feeling) || isNaN(review.understanding) || isNaN(review.support) )
        ? handleBadData() :
        axios.post('/review', review)
        .then((response) => {
            dispatch({
                type: 'CLEAR_REVIEW',
                payload: value
            })
            setValue('');
            history.push('/')
        })
        .catch((err) => {
            console.error.err;
        })
    }

    console.log(review)
    return (
        <div>
            <List className="submit-list">
                <ListItem>Feeling: {review.feeling}</ListItem>
                <ListItem>Understanding: {review.understanding}</ListItem>
                <ListItem>Support: {review.support}</ListItem>
                <ListItem>Comments: {review.comments}</ListItem>
            </List>
            <Button variant="contained" onClick={handleClick}>Leave New Feedback</Button>
            <Button onClick={history.goBack}>Go Back</Button>
        </div>
    )
}

export default Submit;