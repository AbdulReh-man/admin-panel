import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import SidebarDash from "./scenes/global/SidebarDash";
import { Outlet } from "react-router-dom";
import { Wrapper } from "./hoc";
export default function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <SidebarDash />
          <main className='content'>
            <Topbar />
            <Wrapper>
              <Outlet />
            </Wrapper>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
