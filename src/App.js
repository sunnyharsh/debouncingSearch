import "./App.css";
import AppRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme/index";
import store from "./store/store";
import ReduxProvider from "./Componets/ReduxProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <CssBaseline />
          <ReduxProvider reduxStore={store}>
            <AppRoutes />
          </ReduxProvider>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
