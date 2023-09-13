import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { getUriPath } from "../../../common/util";

const LeftMenu = ({ mode }) => {
  const basename = "/app";

  return (
    <Menu mode={mode}>
      <Menu.Item key="explore">
        <Link to={getUriPath(basename, "/board")}>BOARD</Link>
      </Menu.Item>
      <Menu.Item key="features">
        <Link to={getUriPath(basename, "/ftp")}>FTP</Link>
      </Menu.Item>
      <Menu.Item key="about">
        <Link to={getUriPath(basename, "/config")}>CONFIG</Link>
      </Menu.Item>
      <Menu.Item key="contact">ADMIN</Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
