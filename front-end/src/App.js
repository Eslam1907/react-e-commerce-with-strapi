import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Header1 from "./components/header/header1";
import Header2 from "./components/header/header2";
import Header3 from "./components/header/header3";
import { ColorModeContext, useMode } from "./theme/theme";
import Herosection from "./components/hero/Herosection";
import Icons from "./components/hero/Icons";
import Main from "./components/products/Details/main";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scroll/ScrollToTop";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <div className="App">
          <Header1 />
          <Header2 />
          <Header3 />

        <Box sx={{bgcolor:theme.palette.bg.main}}>
            <Herosection />
          
            <Icons />
            <Main />
        </Box>
        <Footer />
        <ScrollToTop />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
