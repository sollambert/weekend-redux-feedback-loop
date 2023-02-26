import { Input, Button } from "@mui/material";
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function Feeling() {

    const [value, setValue] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleClick = (e) => {
        dispatch({
            type: 'SET_FEELINGS',
            payload: value
        })
        setValue('');
        history.push('/understanding')
    }

    return (
        <div>
            <Input type="number" label="Feeling" placeholder="How are you feeling today?" onChange={handleChange} value={value} />
            <Button onClick={handleClick}>NEXT</Button>
        </div>
    )
}

export default Feeling;