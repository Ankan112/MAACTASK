import { Breadcrumb } from "antd";
import AreaFormCard from "../../components/AreaFormCard";
const AreaForm = () => {
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
            Area List
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
      {/* Area Form */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "38px",
        }}
      >
        <AreaFormCard />
      </div>
    </div>
  );
};

export default AreaForm;
