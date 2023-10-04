import Board from "./component/pages/board";
import Ftp from "./component/pages/ftp";
import Config from "./component/pages/config";
import { Routes, Route } from "react-router-dom";
import { getUriPath } from "./common/util";
import Navbar from "./component/basic/header";

function App() {
  // Main App Routing Class.

  const basename = "/app";

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route
          exact
          path={getUriPath(basename, "/board")}
          element={<Board />}
        ></Route>
        <Route
          exact
          path={getUriPath(basename, "/ftp")}
          element={<Ftp />}
        ></Route>
        <Route
          exact
          path={getUriPath(basename, "/config")}
          element={<Config />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
