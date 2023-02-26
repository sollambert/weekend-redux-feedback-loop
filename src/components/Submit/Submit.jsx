import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Table, TableHead, TableBody, TableRow, TableCell as Cell, Input, Button } from '@mui/material';
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

    const handleBadData = () => {
        swal.fire({title: 'Please only use numbers 1-5, go back and adjust your values'})
        //history.push('/');
    }

    //Click listener for submission, checks input validation before sending
    const handleClick = (e) => {
        (review.feeling > 5 || review.understanding > 5 || review.support > 5
            || review.feeling < 1 || review.understanding < 1 || review.support < 1
            || isNaN(review.feeling) || isNaN(review.understanding) || isNaN(review.support) )
        ? handleBadData() :
        axios.post('/review', review)
        .then((response) => {
            dispatch({
                type: 'CLEAR_REVIEW',
                payload: value
            })
            setValue('');
            history.push('/success')
        })
        .catch((err) => {
            console.error.err;
        })
    }

    console.log(review)
    return (
        <div>
            <Table>
                <TableBody>
                    <TableRow>
                        <Cell>Feeling</Cell>
                        <Cell>{review.feeling}</Cell>
                    </TableRow>
                    <TableRow>
                        <Cell>Understanding</Cell>
                        <Cell>{review.understanding}</Cell>
                    </TableRow>
                    <TableRow>
                        <Cell>Support</Cell>
                        <Cell>{review.support}</Cell>
                    </TableRow>
                    <TableRow>
                        <Cell>Comments</Cell>
                        <Cell>{review.comments}</Cell>
                    </TableRow>
                </TableBody>
            </Table>
            <Button variant="contained" onClick={handleClick}>Leave New Feedback</Button>
            <Button onClick={history.goBack}>Go Back</Button>
        </div>
    )
}

export default Submit;