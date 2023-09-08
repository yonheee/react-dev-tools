import Board from "./component/pages/board";
import { Routes, Route } from "react-router-dom";
import {getUriPath} from "./common/util"

function App() {
  // Main App Routing Class.
  const basename = "/app";

  return (
    <Routes>
      <Route exact path={getUriPath(basename, "/board")} Component={Board}></Route>
      <Route exact path="/ftp"></Route>
      <Route exact path="/ftp"></Route>
    </Routes>
  );
}

export default App;
