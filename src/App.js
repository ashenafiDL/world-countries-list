import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { HomePage } from "./components/homePage";
import "./index.css";

export default function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline>
          <HomePage />
        </CssBaseline>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
