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

    const handleClick = (e) => {
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
                <ListItem>{review.feeling}</ListItem>
                <ListItem>{review.understanding}</ListItem>
                <ListItem>{review.support}</ListItem>
                <ListItem>{review.comments}</ListItem>
            </List>
            <Button variant="contained" onClick={handleClick}>Leave New Feedback</Button>
        </div>
    )
}

export default Submit;