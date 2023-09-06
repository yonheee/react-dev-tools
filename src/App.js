import Board from "./pages/board";
import { Routes, Route } from "react-router-dom";

function App() {
  // const value = history;

  return (
    <Routes>
      <Route exact path="/app" Component={Board}></Route>
      <Route exact path="/board"></Route>
      <Route exact path="/list"></Route>
    </Routes>
  );
}

export default App;
