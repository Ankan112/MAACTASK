import { Form, Input, Button, Select, Checkbox, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useSignUpMutation } from "../redux/api/user/userApi";
import { useEffect } from "react";

const { Option } = Select;

const RegisterForm = () => {
  const [signUp, { data, isError, isLoading, isSuccess }] = useSignUpMutation();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  // Function to handle form submission
  const handleSignUp = (values) => {
    signUp(values);
  };
  useEffect(() => {
    if (isSuccess && data?.token) {
      message.success("Sign Up Successful!"),
        localStorage.setItem("accessToken", data?.token);
      form.resetFields();
      navigate("/dashboard/region");
    }
  }, [isSuccess, data?.token, navigate, form]);
  if (isError) {
    return <p>Something went wrong!</p>;
  }

  const onFinishFailed = () => {
    message.error("Fill the form!");
  };
  const inputStyles = {
    color: "#898989",
    width: "608px",
    fontFamily: "Manrope",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "150%",
    borderBottom: "1px solid #E1E1E1",
    paddingBottom: "24px",
    borderRadius: "0px",
  };

  return (
    <div
      style={{
        maxWidth: "1024px",
        borderRadius: "32px",
        margin: "0 auto",
        border: "1px solid white",
        background: "white",
      }}
    >
      <h1
        style={{
          marginTop: "40px",
          color: "#0B141F",
          textAlign: "center",
          fontFamily: "Manrope",
          fontSize: "48px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "150%",
        }}
      >
        Create Account
      </h1>
      <p
        style={{
          margin: "16px 0 48px",
          fontWeight: 300,
          fontSize: "24px",
          textAlign: "center",
        }}
      >
        Fill in the details below to create an account
      </p>
      <Form
        style={{
          maxWidth: "608px",
          margin: "0 auto",
        }}
        onFinish={handleSignUp}
        onFinishFailed={onFinishFailed}
      >
        {/* Name Field */}
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input
            placeholder="Enter Your Full Name"
            variant="borderless"
            style={inputStyles}
          />
        </Form.Item>

        {/* Email Field */}
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            placeholder="Enter Your Email"
            variant="borderless"
            style={inputStyles}
            type="email"
          />
        </Form.Item>

        {/* ID Field */}
        <Form.Item
          name="employeeId"
          rules={[{ required: true, message: "Please input your ID!" }]}
        >
          <Input
            placeholder="Your Id"
            variant="borderless"
            style={inputStyles}
          />
        </Form.Item>

        {/* Phone Field */}
        <Form.Item
          name="phoneNumber"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input
            placeholder="Your Phone Number"
            variant="borderless"
            style={inputStyles}
          />
        </Form.Item>

        {/* Password Field */}
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              min: 8,
              message: "Password must be at least 8 characters long!",
            },
          ]}
        >
          <Input
            placeholder="Password "
            variant="borderless"
            style={inputStyles}
            type="password"
          />
        </Form.Item>

        {/* Confirm Password Field */}
        <Form.Item
          name="passwordConfirm"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords do not match!")
                );
              },
            }),
          ]}
        >
          <Input
            placeholder="Confirm Password "
            variant="borderless"
            style={inputStyles}
            type="password"
          />
        </Form.Item>

        {/* Role Field */}
        <Form.Item
          name="role"
          rules={[{ required: true, message: "Please select your role!" }]}
        >
          <Select
            style={{
              color: "#898989",
              width: "608px",
              fontFamily: "Manrope",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "150%",
              borderBottom: "1px solid #E1E1E1",
              paddingBottom: "24px",
              borderRadius: "0px",
            }}
            variant="borderless"
            placeholder="Select Your Role"
          >
            <Option value="HUB">HUB</Option>
          </Select>
        </Form.Item>
        <Checkbox
          style={{
            margin: "16px 0 48px",
            color: "#000",
            fontFamily: "Manrope",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: 500,
          }}
        >
          I read and agree to the{" "}
          <span style={{ color: "#0052CC" }}>Terms & Conditions</span>
        </Checkbox>
        {/* Sign Up Button */}
        <Form.Item>
          <Button
            type="primary"
            style={{
              width: "608px",
              padding: "24px 0",
              borderRadius: "8px",
              backgroundColor: "#0052CC",
              height: "74px",
              color: "#FFF",
              textAlign: "center",
              fontFamily: "Manrope",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "800",
              lineHeight: "130%",
            }}
            htmlType="submit"
          >
            {isLoading ? "Loading..." : " Create Account"}
          </Button>
        </Form.Item>
      </Form>
      <p
        style={{
          color: "#0B141F",
          fontFamily: "Manrope",
          fontSize: "24px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "150%",
          margin: "64px 0 80px",
          textAlign: "center",
        }}
      >
        Already have an account?{" "}
        <Link
          to="/sign-in"
          style={{ color: "#0052CC", textDecoration: "none" }}
        >
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
