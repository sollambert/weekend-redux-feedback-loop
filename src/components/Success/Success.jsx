import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
function Success() {
    const history = useHistory();
    const handleClick = () => {
        history.push('/');
    }
    return (
        <>
            <h1>Success! Survey submitted.</h1>
            <Button variant="contained" onClick={handleClick}>Return to Survey Start</Button>
        </>
    )
}

export default Success;