import { Input, Button } from '@mui/material'
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

    const handleKeyDown = (e) => {
        if (e.key == "Enter") {
            handleClick(e);
        }
    }

    const handleClick = (e) => {
        if (value > 5 || value < 1 || isNaN(value)) {
            alert('Please only use numbers 1-5')
            setValue('');
        } else {
            dispatch({
                type: 'SET_UNDERSTANDING',
                payload: value
            })
            setValue('');
            history.push('/support')
        }
    }

    return (
        <div>
            <p>How well are you understanding the material?</p>
            <Input onKeyDown={handleKeyDown} autoFocus={true} type="number" name="Understanding" placeholder='Select a number 0-5' onChange={handleChange} value={value} />
            <Button onClick={handleClick}>NEXT</Button>
        </div>
    )
}

export default Understanding;