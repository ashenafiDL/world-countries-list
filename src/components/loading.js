import { CircularProgress, Container } from "@mui/material";

export const Loading = () => {
  // FIXME - better loading message
  return (
    <Container className="flex flex-col items-center justify-center">
      <CircularProgress />
      <p className="py-4">Loading...</p>
    </Container>
  );
};
