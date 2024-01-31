import { Breadcrumb } from "antd";
import RegionFormCard from "../../components/RegionFormCard";
const RegionForm = () => {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <div style={{}}>
          <h2
            style={{
              margin: "32px 0 8px 24px",
              fontSize: "20px",
              fontWeight: 700,
              color: "#0C1D37",
            }}
          >
            Region List
          </h2>
          <Breadcrumb
            style={{
              marginLeft: "24px",
              marginBottom: "8px",
            }}
            separator=">"
            items={[
              {
                title: "Geo",
              },
              {
                title: "Geo List",
                href: "",
              },
              {
                title: "Create Geo",
                href: "",
              },
            ]}
          />
        </div>
      </div>
      {/* Region Form */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "38px",
        }}
      >
        <RegionFormCard />
      </div>
    </div>
  );
};

export default RegionForm;
