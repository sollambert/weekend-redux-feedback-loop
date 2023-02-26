import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { Table, TableHead, TableBody, TableRow, TableCell as Cell, Button } from '@mui/material';
import ReviewItem from './ReviewItem/ReviewItem';

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
                        <Cell>Actions</Cell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {reviews.map((review) => {
                        return (
                            <ReviewItem key={review.id} review={review} getReviews={getReviews}/>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}

export default Admin;