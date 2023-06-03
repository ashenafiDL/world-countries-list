import {
  Box,
  Container,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";

export const Banner = () => {
  const [filter, setFilter] = useState("first");

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <Container className="mx-auto flex h-3/5 flex-col items-center justify-center">
      <h1>World Countries List</h1>
      <FormControl>
        <Box>
          <Select
            variant="filled"
            id="filter"
            value={filter}
            onChange={handleChange}
            min-h-screen
          >
            <MenuItem value="first">By first letters</MenuItem>
            <MenuItem value="any">By any letters</MenuItem>
          </Select>
          <TextField className="w-96" variant="outlined" label="Search" type="search" />
        </Box>
      </FormControl>
    </Container>
  );
};
