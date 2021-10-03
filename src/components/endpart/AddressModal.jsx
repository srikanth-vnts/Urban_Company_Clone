import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AutocompleteInput from './AutocompleteInput';

const style = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "400px",
    height: "450px",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    marginTop: "100px"
    // background: "red"
};

export default function AddressModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Fill Address</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} style={{
                    // marginTop: "10%",

                }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2"
                        style={{ position: "absolute", top: -400 }}
                    >



                        < div className="AddressTopBar flex-sb">

                            <div style={{ fontWeight: "800", fontSize: "24px", cursor: "pointer", marginTop: "4px" }} onClick={handleClose} > {"<"} </div>


                            <p style={{ marginTop: "10%" }}>
                                Fill Address for Service
                            </p>


                            <div onClick={handleClose} style={{ cursor: "pointer", marginTop: "10px" }}> {"X"} </div>
                        </div>



                    </Typography>

                    <Typography id="modal-modal-description" sx={{ mt: 0 }}
                        style={{
                            // marginTop: "10%" 
                        }}>





                        <div style={{
                            marginLeft: "10%", marginBottom: "20%"
                        }}>

                            <div className="AM-InputBox">
                                <AutocompleteInput textData={"Full Name"} />

                            </div>
                            <div className="AM-InputBox">
                                <AutocompleteInput textData={"House no. "} />

                            </div>
                            <div className="AM-InputBox">
                                <AutocompleteInput textData={"Landmark"} />

                            </div>
                            <div className="AM-InputBox">
                                <AutocompleteInput textData={"city"} />

                            </div>
                            <div className="AM-InputBox">
                                <AutocompleteInput textData={"Alternate number"} />

                            </div>


                            <div className="AM-InputBox">
                                <Button variant="contained">Save Address</Button>

                            </div>



                        </div>


                    </Typography>
                </Box>
            </Modal >
        </div >
    );
}
