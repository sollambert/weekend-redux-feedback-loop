import {Input, Button} from '@mui/material'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from "react-redux";

function Understanding() {

    const [value, setValue] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleClick = (e) => {
        dispatch({
            type: 'SET_UNDERSTANDING',
            payload: value
        })
        setValue('');
        history.push('/support')
    }

    return (
        <div>
            <Input type="number" label="Understanding" placeholder="How well are you understanding the material?" onChange={handleChange} value={value} />
            <Button onClick={handleClick}>NEXT</Button>
        </div>
    )
}

export default Understanding;