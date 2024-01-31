import { Breadcrumb, Button, theme, Layout } from "antd";
import { Link } from "react-router-dom";
const { Content } = Layout;
const Area = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
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
            ]}
          />
        </div>
        <Button
          style={{
            marginRight: "20px",
          }}
          type="primary"
        >
          Create New
        </Button>
      </div>
      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 706,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "20px",
              fontWeight: 400,
              color: "#9FA3A6",
              textAlign: "center",
            }}
          >
            Currently you have no Data. <br />
            For next step first{" "}
            <Link to={"/"} style={{ color: "#556EE6" }}>
              Create Area
            </Link>
          </p>
        </div>
      </Content>
    </div>
  );
};

export default Area;
