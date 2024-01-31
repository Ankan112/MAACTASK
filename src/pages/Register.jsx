import RegisterForm from "../components/RegisterForm";
const Register = () => {
  return (
    <div className="main-container auth-bg">
      {/* Register form */}
      <div
        style={{
          paddingTop: "112px",

          paddingBottom: "80px",
        }}
      >
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
