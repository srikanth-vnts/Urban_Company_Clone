import * as React from "react";
import TextField from "@mui/material/TextField";

export default function FreeSolo({ textData }) {
  return (
    <>
      <TextField
        id="outlined-basic"
        label={textData}
        variant="outlined"
        style={{ width: "300px" }}
      />
    </>
  );
}
