import {
  Box,
  Container,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

export const Banner = ({ filter, handleSearchChange, handleFilterChange }) => {
  return (
    <Container className="flex h-3/5 flex-col items-center justify-center">
      <h1>World Countries List</h1>
      <FormControl>
        <Box>
          <Select
            autowidth
            id="filter"
            value={filter}
            onChange={handleFilterChange}
          >
            <MenuItem value="starting">Starting word</MenuItem>
            <MenuItem value="any">Any word</MenuItem>
          </Select>
          <TextField
            className="w-full sm:w-60 md:w-64 lg:w-72 xl:w-80 2xl:w-96"
            label="Search"
            type="search"
            onChange={handleSearchChange}
          />
        </Box>
      </FormControl>
    </Container>
  );
};
