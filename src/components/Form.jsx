import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Form = () => {
  const [inputs, setInputs] = useState({
    name: "",
    input: "",
    subject: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ inputs });
  };
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        alignContent: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "10px",
            width: "300px",
          }}
        >
          <TextField
            name="name"
            value={inputs.name}
            onChange={handleChange}
            label={" Your Name"}
            type={"text"}
            sx={{ margin: 2, color: "white" }}
          />

          <TextField
            name="email"
            value={inputs.email}
            onChange={handleChange}
            label={"Your Email"}
            type={"email"}
            sx={{ margin: 2, color: "white" }}
          />
          <TextField
            name="subject"
            value={inputs.subject}
            onChange={handleChange}
            label={"Subject"}
            type={"text"}
            sx={{ margin: 2, color: "white" }}
          />

          <Button
            variant="contained"
            style={{
              textAlign: "center",
              width: "200px",
              margin: " 10px auto",
            }}
            type="submit"
          >
            SEND A MESSAGE
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
