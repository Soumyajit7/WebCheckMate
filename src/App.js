import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
