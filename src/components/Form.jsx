import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { useState } from "react";

const Form = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value, // Corrected this line
    }));
  };

  // form handling
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          value={inputs.name}
          onChange={handleChange}
          type="text"
          variant="outlined"
          placeholder="Enter your name"
          sx={{ margin: "20px" }}
        />
        <br />
        <TextField
          name="email"
          value={inputs.email}
          onChange={handleChange}
          type="email"
          variant="outlined"
          placeholder="Enter your email"
          sx={{ margin: "20px" }}
        />
        <br />
        <TextField
          name="password"
          value={inputs.password}
          onChange={handleChange}
          type="password"
          variant="outlined"
          placeholder="Enter your password"
          sx={{ margin: "20px" }}
        />
        <br />
        <FormGroup sx={{ margin: "20px" }}>
          <FormControlLabel
            label="I Agree T&C"
            control={
              <Checkbox
                onChange={() =>
                  setInputs((preState) => ({
                    ...preState,
                    terms: !inputs.terms,
                  }))
                }
              />
            }
          />
        </FormGroup>
        <br />
        <Button type="submit" variant="contained" color="success">
          Submit
        </Button>
      </form>
    </>
  );
};

export default Form;
