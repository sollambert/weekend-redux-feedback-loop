import { Input, Button } from '@mui/material'
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

function Understanding() {

    const [value, setValue] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    const swal = withReactContent(Swal);
    const understanding = useSelector(store => store.review.understanding)

    useEffect(() => {
        setValue(understanding ? understanding : '')
    },[])

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleKeyDown = (e) => {
        if (e.key == "Enter") {
            handleClick(e);
        }
    }

    const handleClick = (e) => {
        e.preventDefault();
        if (value > 5 || value < 1 || isNaN(value)) {
            swal.fire({
                title: 'Please only use numbers 1-5'
            })
        } else {
            dispatch({
                type: 'SET_UNDERSTANDING',
                payload: value
            })
            // setValue('');
            history.push('/support')
        }
    }

    return (
        <div>
            <p>How well are you understanding the material?</p>
            <Input onKeyDown={handleKeyDown} autoFocus={true} type="number" name="Understanding" placeholder='Select a number 0-5' onChange={handleChange} value={value} />
            <Button onClick={handleClick}>NEXT</Button>
            <Button onClick={history.goBack}>Go Back</Button>
        </div>
    )
}

export default Understanding;