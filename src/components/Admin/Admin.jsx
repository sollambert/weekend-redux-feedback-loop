import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { Table, TableHead, TableBody, TableRow, TableCell as Cell, Button } from '@mui/material';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

function Admin() {

    const dispatch = useDispatch();
    const reviews = useSelector(store => store.reviews)
    const swal = withReactContent(Swal);

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

    const handleFlag = () => {
        swal.fire({
          title: "Flag for further review?",
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          showCancelButton: "true",
          focusConfirm: 'true'
        }).then((result) => {
            if (result.isConfirmed) {

            }
        })
        .catch((err) => {
            console.error(err);
        });
    }

    const handleDelete = () => {
        swal.fire({
          title: "Delete review?",
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          showCancelButton: "true",
          focusCancel: 'true'
        }).then((result) => {
            if (result.isConfirmed) {
                
            }
        })
        .catch((err) => {
            console.error(err);
        });
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
                            <Cell>
                                <Button onClick={handleFlag} variant="contained">Flag</Button>
                                <Button onClick={handleDelete} variant="contained">Delete</Button>
                            </Cell>
                        </TableRow>)
                    })}
                </TableBody>
            </Table>
        </div>
    )
}

export default Admin;