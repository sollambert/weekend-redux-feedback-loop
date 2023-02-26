import { Input, Button } from '@mui/material'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

function Submit() {

    const [value, setValue] = useState('');
    const history = useHistory();
    const review = useSelector(store => store.review);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleClick = (e) => {
        dispatch({
            type: 'CLEAR_REVIEW',
            payload: value
        })
        setValue('');
        history.push('/')
    }

    console.log(review)
    return (
        <div>
            {
                `${review.feelings} +
                ${review.understanding} +
                ${review.support} +
                ${review.comments}`
            }
            <Button onClick={handleClick}>SUBMIT REVIEW</Button>
        </div>
    )
}

export default Submit;