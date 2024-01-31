import { Layout, Menu, Button, theme, Breadcrumb } from "antd";
import { Footer } from "antd/es/layout/layout";
import logo from "../../assets/FieldXDashboard.svg";
import location from "../../assets/location.svg";
import { Link, Outlet } from "react-router-dom";
import user from "../../assets/user.png";
import arrow from "../../assets/chevron-down.svg";
const { Header, Sider, Content } = Layout;
const DashboardLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        width={252}
        style={{ background: "white" }}
      >
        <div>
          <div
            style={{
              padding: "11px 75px",
            }}
            className=""
          >
            <img src={logo} alt="Logo" />
          </div>
          <p
            style={{
              margin: "20px 0 26px 20px",
              fontSize: "11px",
              fontWeight: 600,
              color: "#6A7187",
            }}
          >
            MENU
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "21px",
            }}
          >
            <div>
              <img src={location} alt="Location" />
            </div>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 400,
                color: "#757575",
                marginLeft: "16px",
              }}
            >
              Geo Information
            </p>
          </div>
        </div>
        <Menu
          defaultSelectedKeys={["1"]}
          style={{
            marginLeft: "42px",
            marginRight: "42px",
            fontWeight: 400,
            fontSize: "13px",
            background: "none",
          }}
          items={[
            {
              key: "1",
              label: (
                <Link
                  to="/dashboard/region"
                  style={{
                    background: "none",
                    marginBottom: "4px",
                    padding: "0px",
                  }}
                >
                  Region
                </Link>
              ),
            },
            {
              key: "2",
              label: <Link to="/dashboard/area">Area</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            paddingRight: "20px",
            background: colorBgContainer,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img src={user} alt="" />
            </div>
            <p
              style={{
                padding: "0 8px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Henry
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img src={arrow} alt="" />
            </div>
          </div>
        </Header>
        <Outlet />

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
                Create Region
              </Link>
            </p>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            background: "#F2F2F5",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 23px",
            height: "60px",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "13px",
                fontWeight: 400,
                color: "#74788D",
              }}
            >
              2022 © MAAC
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              gap: "16px",
            }}
          >
            <p>Contact Us</p>
            <p>Privacy Policy</p>
            <p>Terms & Condition</p>
          </div>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
