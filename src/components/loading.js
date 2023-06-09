import { CircularProgress, Container, Typography } from "@mui/material";

export const Loading = () => {
  return (
    <Container className="flex flex-col items-center justify-center">
      <CircularProgress />
      <Typography variant="button" className="py-4">
        Loading...
      </Typography>
    </Container>
  );
};
