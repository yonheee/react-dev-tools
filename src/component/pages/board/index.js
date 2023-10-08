import { useState, useEffect } from "react";
import "../../../App.css";
import { Table, Button, Input, Modal } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";

function Board() {
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
    {
      title: "EDIT",
      dataIndex: "edit",
      render: () =>
        edited === true ? (
          <CheckCircleTwoTone twoToneColor="#52c41a" />
        ) : (
          <CheckCircleTwoTone twoToneColor="#eb2f96" />
        ),
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [edited, setEdited] = useState(false);

  useEffect(() => {
    setIsModalOpen(false);
  }, []);

  const showModal = (index) => {
    setIsModalOpen(true);
    setSelectedIndex(index);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setEdited(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="option-container">
        <div className="align-left">
          <Button type="primary" style={{ marginLeft: "20px" }}>
            목록 저장
          </Button>
          <Button type="primary" style={{ marginLeft: "20px" }}>
            목록 삭제
          </Button>
        </div>
        <div className="align-right">
          <Button type="primary" style={{ marginRight: "20px" }}>
            새로 고침
          </Button>
        </div>
      </div>
      <div>
        <Table
          className="board-table"
          rowSelection={{ type: "checkbox" }}
          columns={columns}
          dataSource={data}
          onRow={(record, index) => {
            return {
              onClick: () => showModal(index),
            };
          }}
        />
      </div>
      <Modal
        title="HOST EDIT"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>HOST NAME</p>
        <Input placeholder="Input New Host Name."></Input>
      </Modal>
    </div>
  );
}

export default Board;
