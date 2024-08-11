import { Box, Button, TextField, Typography } from "@mui/material";
import Form from "./components/Form";

function App() {
  return (
    <>
      {/* <h1>This is mui tutorial</h1> */}
      <Box className=" flex items-center justify-center">
        <Box
          sx={{
            backgroundColor: "#dfe6e9",
            width: "100%",
            maxWidth: 500,
            padding: "10px",
            margin: "20px",
          }}
        >
          <Typography variant="h1" sx={{ color: "green" }}>
            This is hera
          </Typography>
          <Typography sx={{ marginTop: "5px", marginBottom: "5px" }}>
            This is simple paragraph
          </Typography>
          {/* <TextField
            color="success"
            fullWidth={true}
            placeholder="Enter the problem"
          /> */}
          <Form />
          {/* <Box className=" flex items-center gap-x-3 my-3">
            <Button variant="contained" color="success">
              Contained
            </Button>
            <Button variant="outlined" color="success">
              Outlined
            </Button>
          </Box> */}
        </Box>
      </Box>
    </>
  );
}

export default App;
