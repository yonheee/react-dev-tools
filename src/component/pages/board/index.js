import "../../../App.css";
import { Radio, Divider, Table } from "antd";

const columns = [
  {
    title: "HOST NAME",
    dataIndex: "host_name",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "IP",
    dataIndex: "ip",
  },
  {
    title: "ROOT",
    dataIndex: "root",
  },
];

const data = [
  {
    key: "1",
    host_name: "SYSTEM A",
    ip: "127.0.0.1",
    root: "home/app/user",
  },
  {
    key: "2",
    host_name: "SYSTEM B",
    ip: "127.0.0.1",
    root: "home/app/user",
  },
  {
    key: "3",
    host_name: "SYSTEM C",
    ip: "127.0.0.1",
    root: "home/admin/app",
  },
  {
    key: "4",
    host_name: "SYSTEM D",
    ip: "127.0.0.1",
    root: "home/admin/app",
  },
];

function Board() {
  return (
    <div>
      <Table
        className="board-table"
        rowSelection={{ type: "checkbox" }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
}

export default Board;
