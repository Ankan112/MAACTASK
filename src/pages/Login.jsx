import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="main-container auth-bg">
      {/* Register form */}
      <div
        style={{
          paddingTop: "112px",

          paddingBottom: "80px",
        }}
      >
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
