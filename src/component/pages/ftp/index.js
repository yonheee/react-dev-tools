import "../../../App.css";
import { Table, Button } from "antd";

const columns = [
  {
    title: "No.",
    dataIndex: "rowIndex",
    render: (text, record, index) => {
      return index + 1;
    },
  },
  {
    title: "HOST NAME",
    dataIndex: "hostname",
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
    rowIndex: "1",
    hostname: "SYSTEM A",
    ip: "127.0.0.1",
    root: "home/app/user",
  },
  {
    key: "2",
    rowIndex: "2",
    hostname: "SYSTEM B",
    ip: "127.0.0.1",
    root: "home/app/user",
  },
  {
    key: "3",
    rowIndex: "3",
    hostname: "SYSTEM C",
    ip: "127.0.0.1",
    root: "home/admin/app",
  },
  {
    key: "4",
    rowIndex: "4",
    hostname: "SYSTEM D",
    ip: "127.0.0.1",
    root: "home/admin/app",
  },
];

function Ftp() {
  return (
    <div>
      <div className="align-left">
        <Button type="primary" style={{ marginLeft: "20px" }}>
          검증
        </Button>
        <Button type="primary" style={{ marginLeft: "20px" }}>
          선택 전송
        </Button>
        <Button type="primary" style={{ marginLeft: "20px" }}>
          전체 전송
        </Button>
      </div>
      <div>
        <Table
          className="board-table"
          rowSelection={{ type: "checkbox" }}
          columns={columns}
          dataSource={data}
        />
      </div>
    </div>
  );
}

export default Ftp;
