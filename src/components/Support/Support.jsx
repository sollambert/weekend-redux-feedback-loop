import {Input, Button} from '@mui/material'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from "react-redux";

function Support() {


    const [value, setValue] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleClick = (e) => {
        dispatch({
            type: 'SET_SUPPORT',
            payload: value
        })
        setValue('');
        history.push('/comments')
    }

    return (
        <div>
            <Input type="number" label="Support" placeholder="How supported are you?" onChange={handleChange} value={value} />
            <Button onClick={handleClick}>NEXT</Button>
        </div>
    )
}

export default Support;