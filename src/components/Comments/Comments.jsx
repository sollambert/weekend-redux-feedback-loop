import {Input, Button} from '@mui/material'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from "react-redux";

function Comments() {

    const [value, setValue] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleClick = (e) => {
        dispatch({
            type: 'SET_COMMENTS',
            payload: value
        })
        setValue('');
        history.push('/submit')
    }

    return (
        <div>
            <Input type="text" label="Comments" placeholder="Any additional comments?" onChange={handleChange} value={value} />
            <Button onClick={handleClick}>NEXT</Button>
        </div>
    )
}

export default Comments;