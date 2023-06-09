import { Container } from "@mui/material";

export const Footer = () => {
  // TODO - finish the footer
  return (
    <footer className="border-t-2 dark:border-t-gray-200">
      <Container className="mb-8 mt-12 flex flex-row justify-center gap-4">
        <a
          className="text-white no-underline hover:text-opacity-80"
          href="https://github.com/Asabeneh/30-Days-Of-JavaScript"
          target="_blank"
          rel="noreferrer"
        >
          <span>↗ inspired by</span>
        </a>
        <a
          className="text-white no-underline hover:text-opacity-80"
          href="https://github.com/ashenafiDL"
          target="_blank"
          rel="noreferrer"
        >
          <span>↗ GitHub</span>
        </a>
      </Container>
    </footer>
  );
};
