import { Input, Button } from '@mui/material'
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

    const handleKeyDown = (e) => {
        if (e.key == "Enter") {
            handleClick(e);
        }
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
            <p>Any comments you'd like to leave?</p>
            <Input onKeyDown={handleKeyDown} autoFocus={true} type="text" name="Comments" onChange={handleChange} value={value} />
            <Button onClick={handleClick}>NEXT</Button>
            <Button onClick={history.goBack}>Go Back</Button>
        </div>
    )
}

export default Comments;