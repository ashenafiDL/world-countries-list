import { ErrorOutline } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export const FetchError = () => {
  return (
    <Box className="flex flex-col items-center justify-center">
      <ErrorOutline fontSize="large" />
      <Typography className="py-4" variant="button">
        An error ocurred while fetching data.
      </Typography>
    </Box>
  );
};
