import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'relative',
    top: '0px',
    left: '1250px',
    transform: 'translate(-50%, -50%)',
    width: "300px",
    height: "200vh",
    bgcolor: '#FFFFFF',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,

};

export default function LoginModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (

        <div className="loginModalMainDiv">

            <div className="LM-ButtonDiv">


                <Button onClick={handleOpen}>modal</Button>

            </div>

            {/* <div className="loginmodalModal"> */}


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">

                        Please login to continue

                    </Typography>

                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>

                </Box>
            </Modal>
            {/* </div> */}
        </div>
    );
}
