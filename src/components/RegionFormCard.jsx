import { Button, Form, Input } from "antd";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const RegionFormCard = () => (
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
      padding: "40px 48px",
      borderRadius: "10px",
      border: "1px solid #E6E6E6",
      background: "#fff",
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <p
      style={{
        fontSize: "13px",
        fontWeight: 500,
        color: "#495057",
        marginBottom: "10px",
      }}
    >
      Region
    </p>
    <Form.Item
      name="region"
      rules={[
        {
          required: true,
          message: (
            <p style={{ margin: "8px 0 0 4px" }}>Please input Region!</p>
          ),
        },
      ]}
    >
      <Input
        placeholder="Type Region"
        style={{
          width: "380px",
          height: "44px",
          borderRadius: "10px",
        }}
      />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 13,
        span: 16,
      }}
    >
      <Button
        style={{
          background: "#0B2E4E",
          marginTop: "24px",
          padding: "9px 15px",
          height: "46px",
          width: "173px",
          borderRadius: "10px",
        }}
        type="primary"
        htmlType="submit"
      >
        Add Region
      </Button>
    </Form.Item>
  </Form>
);
export default RegionFormCard;
