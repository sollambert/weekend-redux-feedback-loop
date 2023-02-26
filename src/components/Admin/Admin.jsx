import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { Table, TableHead, TableBody, TableRow, TableCell as Cell } from '@mui/material';

function Admin() {

    const dispatch = useDispatch();
    const reviews = useSelector(store => store.reviews)

    useEffect(() => {
        getReviews();
    }, [])

    const getReviews = () => {
        axios.get('/review')
            .then((response) => {
                dispatch({
                    type: "SET_REVIEWS",
                    payload: response.data
                })
            })
            .catch((err) => {
                console.error(err);
            })
    }

    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <Cell>Feeling</Cell>
                        <Cell>Understanding</Cell>
                        <Cell>Support</Cell>
                        <Cell>Comments</Cell>
                        <Cell>Date</Cell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {reviews.map((review) => {
                        return (<TableRow key={review.id}>
                            <Cell>
                                {review.feeling}
                            </Cell>
                            <Cell>
                                {review.understanding}
                            </Cell>
                            <Cell>
                                {review.support}
                            </Cell>
                            <Cell>
                                {review.comments}
                            </Cell>
                            <Cell>
                                {new Date(review.date).toLocaleString()}
                            </Cell>
                        </TableRow>)
                    })}
                </TableBody>
            </Table>
        </div>
    )
}

export default Admin;