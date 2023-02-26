import { Table, TableHead, TableBody, TableRow, TableCell as Cell, Button } from '@mui/material';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import axios from 'axios';
import './ReviewItem.css'

const swal = withReactContent(Swal);

function ReviewItem({review, getReviews}) {

    const handleFlag = () => {
        const buttonText = review.flagged ? 'Unflag review?' : 'Flag for further review?'
        swal.fire({
          title: buttonText,
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          showCancelButton: "true",
          focusConfirm: 'true'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.put(`/review/${review.id}`)
                .then((response) => {
                    getReviews();
                })
                .catch((err) => {
                    console.error(err);
                })
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
                axios.delete(`/review/${review.id}`)
                .then((response) => {
                    getReviews();
                })
                .catch((err) => {
                    console.error(err);
                })
            }
        })
        .catch((err) => {
            console.error(err);
        });
    }

    return (
        <TableRow className={review.flagged ? 'flagged' : ''} key={review.id}>
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
                {new Date(review.date).toLocaleDateString()}
            </Cell>
            <Cell>
                <Button onClick={handleFlag} variant="contained">Flag</Button>
                <Button onClick={handleDelete} variant="contained">Delete</Button>
            </Cell>
        </TableRow>
    )
}

export default ReviewItem;