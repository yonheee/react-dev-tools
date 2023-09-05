import logo from "./logo.svg";
import "./App.css";
import { Button } from "antd";

function App() {
  // const value = history;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Dev Framework.</p>
        <div>
          <Button>Link 1</Button>
          <Button>Link 2</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
