import { Form, Input, Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/api/user/userApi";
import { useEffect } from "react";

const LoginForm = () => {
  const [login, { data, isLoading, isSuccess, error }] = useLoginMutation();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  // Function to handle form submission
  const handleSignUp = (values) => {
    login(values);
  };

  useEffect(() => {
    if (isSuccess && data?.token) {
      message.success("Login Successful!"),
        localStorage.setItem("accessToken", data?.token);
      form.resetFields();
      navigate("/dashboard/region");
    }
  }, [isSuccess, data?.token, navigate, form]);
  if (error) {
    message.error(error?.data?.message);
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
        Welcome Back!
      </h1>
      <p
        style={{
          margin: "16px 0 48px",
          fontWeight: 300,
          fontSize: "24px",
          textAlign: "center",
        }}
      >
        Please login to your account
      </p>
      <Form
        form={form}
        style={{
          maxWidth: "608px",
          margin: "0 auto",
        }}
        onFinish={handleSignUp}
        onFinishFailed={onFinishFailed}
      >
        {/* employeeId Field */}
        <Form.Item
          name="employeeId"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            placeholder="Enter Your Id"
            variant="borderless"
            style={inputStyles}
            type="text"
          />
        </Form.Item>

        {/* Password Field */}
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input
            placeholder="Password "
            variant="borderless"
            style={inputStyles}
            type="password"
          />
        </Form.Item>

        {/* Sign in Button */}
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
              marginTop: "24px",
              lineHeight: "130%",
            }}
            htmlType="submit"
          >
            {isLoading ? "Loading..." : "Sign In"}
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
        Don’t have any account?{" "}
        <Link
          to="/sign-up"
          style={{ color: "#0052CC", textDecoration: "none" }}
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
