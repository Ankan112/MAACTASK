import { Button } from "antd";
import Header from "../shared/Header";

const Banner = () => {
  return (
    <div className="banner-bg">
      <Header />
      <div
        style={{
          height: "815px",
          display: "flex",
          justifyContent: "center",
          paddingTop: "120px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "58px",
              fontWeight: 700,
              color: "#0B141F",
              textAlign: "center",
            }}
          >
            Analytics that transform your <br /> product inside-out
          </h1>
          <div
            style={{
              gap: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "60px",
            }}
          >
            <Button
              style={{
                color: "white",
                backgroundColor: "#0052CC",
                borderRadius: "8px",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "150%",
                padding: "12px 24px",
                height: "65px",
                textAlign: "center",
              }}
            >
              Request For Demo
            </Button>
            <Button
              style={{
                color: "#0052CC",
                backgroundColor: "white",
                borderRadius: "8px",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "150%",
                padding: "12px 24px",
                height: "65px",
                textAlign: "center",
                border: "1px solid #0052CC",
                boxShadow: "3px 3px 0 0 #0052CC",
              }}
            >
              Download
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
