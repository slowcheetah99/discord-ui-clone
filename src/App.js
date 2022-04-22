import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Routes from "./components/Routes";

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyles />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
