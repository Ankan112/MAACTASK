import phone2 from "../../assets/phone2.png";
import icon from "../../assets/icon.png";
const Products = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "114px 0 44px",
      }}
    >
      <h4
        style={{
          fontSize: "20px",
          fontWeight: 500,
          color: "#0052CC",
        }}
      >
        Products Features
      </h4>
      <h1
        style={{
          fontSize: "48px",
          fontWeight: 700,
          color: "#0B141F",
        }}
      >
        Make more out of your data
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div>
          <div style={{ textAlign: "right" }}>
            <div
              style={{
                marginBottom: "12px",
              }}
            >
              <img src={icon} alt="" />
            </div>
            <h3
              style={{
                fontSize: "26px",
                fontWeight: 700,
                color: "#0B141F",
              }}
            >
              Real-time analytics
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "#4E4E4E",
                marginTop: "16px",
              }}
            >
              See product usage, sign-ins, feature <br /> metrics change as
              users work on your.
            </p>
          </div>
          <div style={{ textAlign: "right", margin: "64px 0" }}>
            <div
              style={{
                marginBottom: "12px",
              }}
            >
              <img src={icon} alt="" />
            </div>
            <h3
              style={{
                fontSize: "26px",
                fontWeight: 700,
                color: "#0B141F",
              }}
            >
              Intuitive dashboard
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "#4E4E4E",
                marginTop: "16px",
              }}
            >
              See product usage, sign-ins, feature <br /> metrics change as
              users work on your.
            </p>
          </div>
          <div style={{ textAlign: "right" }}>
            <div
              style={{
                marginBottom: "12px",
              }}
            >
              <img src={icon} alt="" />
            </div>
            <h3
              style={{
                fontSize: "26px",
                fontWeight: 700,
                color: "#0B141F",
              }}
            >
              Smart suggestions
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "#4E4E4E",
                marginTop: "16px",
              }}
            >
              See product usage, sign-ins, feature <br /> metrics change as
              users work on your.
            </p>
          </div>
        </div>
        <div>
          <img src={phone2} alt="" />
        </div>
        <div>
          <div style={{ textAlign: "left" }}>
            <div
              style={{
                marginBottom: "12px",
              }}
            >
              <img src={icon} alt="" />
            </div>
            <h3
              style={{
                fontSize: "26px",
                fontWeight: 700,
                color: "#0B141F",
              }}
            >
              Multiple views
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "#4E4E4E",
                marginTop: "16px",
              }}
            >
              See product usage, sign-ins, feature <br /> metrics change as
              users work on your.
            </p>
          </div>
          <div style={{ textAlign: "left", margin: "64px 0" }}>
            <div
              style={{
                marginBottom: "12px",
              }}
            >
              <img src={icon} alt="" />
            </div>
            <h3
              style={{
                fontSize: "26px",
                fontWeight: 700,
                color: "#0B141F",
              }}
            >
              AI-led diagnoses
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "#4E4E4E",
                marginTop: "16px",
              }}
            >
              See product usage, sign-ins, feature <br /> metrics change as
              users work on your.
            </p>
          </div>
          <div style={{ textAlign: "left" }}>
            <div
              style={{
                marginBottom: "12px",
              }}
            >
              <img src={icon} alt="" />
            </div>
            <h3
              style={{
                fontSize: "26px",
                fontWeight: 700,
                color: "#0B141F",
              }}
            >
              Responsive
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "#4E4E4E",
                marginTop: "16px",
              }}
            >
              See product usage, sign-ins, feature <br /> metrics change as
              users work on your.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
