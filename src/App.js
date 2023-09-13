import Board from "./component/pages/board";
import Ftp from "./component/pages/ftp";
import Config from "./component/pages/config";
import { Routes, Route, Link } from "react-router-dom";
import { getUriPath } from "./common/util";
import { Component, Fragment } from "react";
import { Button } from "antd";
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
          Component={Board}
        ></Route>
        <Route
          exact
          path={getUriPath(basename, "/ftp")}
          Component={Ftp}
        ></Route>
        <Route
          exact
          path={getUriPath(basename, "/config")}
          Component={Config}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
