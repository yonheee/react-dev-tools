import { Button, Form, Input } from "antd";

function Config() {
  const [form] = Form.useForm();
  const formItemLayout = { labelCol: { span: 4 }, wrapperCol: { span: 14 } };

  return (
    <Form
      {...formItemLayout}
      layout="vertical"
      form={form}
      style={{ margin: "20px" }}
    >
      <Form.Item label="HOST NAME">
        <Input placeholder="HOST NAME" />
      </Form.Item>
      <Form.Item label="IP">
        <Input placeholder="IP" />
      </Form.Item>
      <Form.Item label="ROOT">
        <Input placeholder="ROOT" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">ASIGN</Button>
      </Form.Item>
    </Form>
  );
}

export default Config;
