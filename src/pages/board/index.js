import logo from "../../logo.svg";
import "../../App.css";
import "../../component/atoms/Atoms.css";
import { Button } from "antd";

function Board() {
  // const value = history;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Dev Framework.</p>
        <div>
          <Button className="blue-btn">Link 1</Button>
          <Button className="blue-btn">Link 2</Button>
        </div>
      </header>
    </div>
  );
}

export default Board;
