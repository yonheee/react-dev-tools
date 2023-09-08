import Board from "./component/pages/board";
import { Routes, Route } from "react-router-dom";
import { getUriPath } from "./common/util";
import { Fragment } from "react";

function App() {
  // Main App Routing Class.

  const basename = "/app";

  return (
    <Routes>
      <Route
        exact
        path={getUriPath(basename, "/board")}
        Component={Board}
      ></Route>
      <Route exact path={getUriPath(basename, "/config")}></Route>
      <Route exact path={getUriPath(basename, "/ftp")}></Route>
    </Routes>
  );
}

export default App;
