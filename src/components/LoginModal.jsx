// import { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
// import Box from 'material-ui/Box';

import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Paper from "@material-ui/core/Paper";

import MuiPhoneNumber from 'material-ui-phone-number';



const style = {
    position: 'relative',
    top: '20%',
    left: '1250px',
    transform: 'translate(-50%, -50%)',
    width: "300px",
    height: "150vh",
    bgcolor: '#FFFFFF',

    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,

};


export default function LoginModal({ setIsCover }) {



    const [open, setOpen] = React.useState(false);
    const [isContinue, setisContinue] = React.useState(true);
    const [country, setCountry] = React.useState('');
    const [mobile, setMobile] = React.useState('hello');


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleContinue = () => {

        setisContinue(!isContinue);

    }

    const handleRedirect = () => {
        //    verification Logic

        //    if verified
        setIsCover(false);

        console.log("set is cover ", setIsCover)
        //else
        // alert("OTP is not correct. Try Again...");

    }

    const mobileNumber = country;

    function handleOnChange(e) {
        setCountry(e);


        console.log("mob ", e)

    }
    function handleNumberSubmit() {
        setMobile(country);
        console.log("country", country);
        console.log("mobile", mobile);
        setisContinue(!isContinue);

        // generate random otp

        generateOtp()


    }

    const generateOtp = () => {
        var min = 1000;
        var max = 9999;
        var otp = Math.floor(min + (Math.random() * (max - min)));
        console.log(otp)
        alert("Your OTP is " + otp)
    }



    return (

        <div className="loginModalMainDiv">

            <div className="LM-ButtonDiv">

                <div className={style.login} onClick={handleOpen} >Login / Sign UP</div>

                {/* <Button onClick={handleOpen}>modal</Button> */}

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
                        {/* <span style={{ marginTop: "500px" }}> */}
                        <p>  <span id="backKey" style={{ display: isContinue ? "none" : "contents" }} onClick={handleContinue}  >{"<"}</span> Please login to continue</p>
                        {/* </span> */}


                    </Typography>

                    {
                        isContinue ? (
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>

                                {/* enter phone number */}

                                <MuiPhoneNumber defaultCountry={'in'} onChange={(e) => (handleOnChange(e))} />

                                {/*  */}

                                <button className="loginModalButton" onClick={() => (handleNumberSubmit())} >
                                    Continue
                                </button>

                            </Typography>

                        ) : (

                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>


                                <div className="modalOtpDiv">
                                    <h1> Enter Verification code</h1>
                                    <p>We have sent you a 4 digit OTP on {mobileNumber}
                                        <span onClick={handleContinue}> Edit</span>
                                    </p>




                                    {/*  */}

                                    <div className="otpPaper">
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                '& > :not(style)': {
                                                    m: 1,
                                                    width: 30,
                                                    height: 30,

                                                },
                                            }}
                                        >



                                            {/* <Paper elevation={3} /> */}

                                            <Paper ><input maxlength="1" className="paperInput"></input>
                                            </Paper >
                                            <Paper ><input maxlength="1" className="paperInput"></input>
                                            </Paper >
                                            <Paper ><input maxlength="1" className="paperInput"></input>
                                            </Paper >
                                            <Paper ><input maxlength="1" className="paperInput"></input>
                                            </Paper >



                                        </Box>
                                    </div>

                                    {/*  */}

                                    <p> <span id="resendOtp" onClick={generateOtp}>Resend OTP </span></p>

                                    <button style={{ background: "black" }} onClick={handleRedirect} className="loginModalButton"  >
                                        Login
                                    </button>


                                </div>

                            </Typography>

                        )
                    }

                </Box>
            </Modal>
            {/* </div> */}
        </div >
    );
}
/*



                                    <div className={classes.paper}>
                                        <Grid
                                            container
                                            style={{ backgroundColor: "pink" }}
                                            className={classes.grid}
                                            justify="center"
                                            alignItems="center"
                                            spacing={3}
                                        >





                                            <Grid
                                                item
                                                xs={12}
                                                container
                                                justify="center"
                                                alignItems="center"
                                                direction="column"
                                            >
                                                <Grid item spacing={3} justify="center">
                                                    <OtpInput
                                                        separator={<span></span>}
                                                        inputStyle={{
                                                            width: "3rem",
                                                            height: "3rem",
                                                            margin: "0 1rem",
                                                            fontSize: "2rem",
                                                            borderRadius: 4,
                                                            backgroundColor: "red",
                                                            border: "1px solid rgba(0,0,0,0.3)"
                                                        }}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </div>


*/



/*

const grid = {
    backgroundColor: "grey",
    height: "50vh",
    textAlign: "center"
}


const paper = {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}



*/

/*


// import React, { Component } from "react";
import ReactDOM from "react-dom";
import OtpInput from "react-otp-input";
// import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles, useTheme } from "@material-ui/core/styles";

// import Box from '@mui/material/Box';

import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Avatar from "@material-ui/core/Avatar";
// import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";


*/
