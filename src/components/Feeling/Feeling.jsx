import { Input, Button } from "@mui/material";
import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

const swal = withReactContent(Swal);
function Feeling() {

    const [value, setValue] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    const feeling = useSelector(store => store.review.feeling)

    useEffect(() => {
        setValue(feeling ? feeling : '')
    },[])

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    //allow form-like submission with key listener
    const handleKeyDown = (e) => {
        if (e.key == "Enter") {
            handleClick(e);
            setValue('');
        }
    }

    //set reducer with input value
    const handleClick = (e) => {
        e.preventDefault();
        if (value > 5 || value < 1 || isNaN(value)) {
            swal.fire({title: 'Please only use numbers 1-5'})
        } else {
            dispatch({
                type: 'SET_FEELING',
                payload: value
            })
            setValue('');
            history.push('/understanding')
        }
    }

    return (
        <div>
            <p>How are you feeling today?</p>
            <Input onKeyDown={handleKeyDown} autoFocus={true} type="number" name="Feeling" placeholder='Select a number 0-5' onChange={handleChange} value={value} />
            <Button onClick={handleClick}>NEXT</Button>
        </div>
    )
}

export default Feeling;