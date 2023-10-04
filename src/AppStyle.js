import { styled } from "styled-components";

export const AppStyle = styled.div`
  height: 100%;
  .blue-btn {
    margin: 20px;
    background-color: #6aafe6;
    color: #d4dfe6;
    border-radius: 10px;
  }

  .board-table {
    margin: 20px;
  }

  .option-container {
    display: flex;
  }

  .align-left {
    display: flex;
    justify-content: default;
    width: 50%;
  }

  .align-right {
    display: flex;
    justify-content: flex-end;
    width: 50%;
  }

  /* Navbar Start */
  .navbar {
    padding-bottom: 1px;
    border-bottom: solid 1px #e8e8e8;
    background-color: white;
    box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.12),
      0 6px 16px -11px rgba(0, 0, 0, 0.08);
    position: sticky;
    top: 0;
    margin-bottom: 20px;
    z-index: 99990;
  }

  .nav-header {
    background-color: white;
    border-bottom: 0;
    padding: 0 4px 0 24px;
  }

  .logo {
    width: 200px;
    float: left;
  }

  .logo a {
    display: inline-block;
    font-size: 20px;
    text-transform: capitalize;
  }

  .navbar-menu {
    width: calc(100% - 200px);
    float: left;
  }
  .navbar-menu .ant-layout-header {
    padding: 0 20px;
  }

  .navbar-menu .ant-menu-horizontal {
    border-bottom: 0;
  }

  .navbar-menu .ant-menu-item {
    padding-bottom: 0px;
  }

  .navbar-menu .leftMenu {
    float: left;
  }

  .navbar-menu .rightMenu {
    float: right;
  }

  .menuButton {
    float: right;
    height: 32px;
    padding: 6px;
    margin-top: 14px;
    display: none;
    background: none;
    margin-right: 10px;
  }

  .ant-drawer-body {
    padding: 0;
  }

  .ant-drawer-body .ant-menu-horizontal > .ant-menu-item,
  .ant-drawer-body .ant-menu-horizontal > .ant-menu-submenu {
    display: inline-block;
    width: 100%;
  }

  .ant-drawer-body .ant-menu-horizontal {
    border-bottom: none;
  }

  .ant-drawer-body .ant-menu-horizontal > .ant-menu-item:hover {
    border-bottom-color: transparent;
  }

  .username {
    display: none;
    margin-left: 8px;
  }

  @media (max-width: 767px) {
    .menuButton {
      display: block;
      margin-right: 10px;
    }

    .leftMenu,
    .rightMenu {
      display: none;
    }

    .logo a {
      margin-left: -10px;
    }

    .ant-drawer-title > .brand-font {
      margin-bottom: 0;
    }

    .username {
      display: inline-block;
    }
  }

  /* Navbar End */
`;
