import { Button, Form, Input, Select, message } from "antd";
import { useGetAllRegionQuery } from "../redux/api/region/regionSlice";
import { useAddAreaMutation } from "../redux/api/area/areaSlice";
import { useEffect } from "react";
const { Option } = Select;
const AreaFormCard = () => {
  const { data: regionData } = useGetAllRegionQuery({ limit: 10, page: 1 });
  const [addArea, { isError, isLoading, isSuccess }] = useAddAreaMutation();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    addArea(values);
  };
  useEffect(() => {
    if (isSuccess) {
      message.success("New Area Added Successful!"), form.resetFields();
    }
  }, [isSuccess, form]);
  if (isError) {
    <p>Something went wrong!</p>;
  }

  const onFinishFailed = () => {
    message.error("Fill the form!");
  };
  return (
    <Form
      form={form}
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
              <p style={{ margin: "8px 0 0 4px" }}>Please input Area!</p>
            ),
          },
        ]}
      >
        <Select
          showSearch
          placeholder="Select Region"
          optionFilterProp="children"
          style={{
            width: "380px",
            height: "44px",
            borderRadius: "10px",
          }}
        >
          {/* Region data will be added here */}
          {regionData?.region?.map((region) => (
            <Option key={region?._id} value={region?._id}>
              {region?.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <p
        style={{
          fontSize: "13px",
          fontWeight: 500,
          color: "#495057",
          marginBottom: "10px",
        }}
      >
        Area
      </p>
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: (
              <p style={{ margin: "8px 0 0 4px" }}>Please input Area!</p>
            ),
          },
        ]}
      >
        <Input
          placeholder="Type Area"
          style={{
            width: "380px",
            height: "44px",
            borderRadius: "6px",
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
          {isLoading ? "Loading..." : "Add Area"}
        </Button>
      </Form.Item>
    </Form>
  );
};
export default AreaFormCard;
