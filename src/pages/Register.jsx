import RegisterForm from "../components/RegisterForm";
import Header from "../components/shared/Header";
const Register = () => {
  return (
    <div className="main-container auth-bg">
      <Header />
      {/* Register form */}
      <div
        style={{
          padding: "60px 0",
        }}
      >
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
