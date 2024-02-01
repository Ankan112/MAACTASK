import LoginForm from "../components/LoginForm";
import Header from "../components/shared/Header";

const Login = () => {
  return (
    <div className="main-container auth-bg">
      <Header />
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
