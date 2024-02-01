import { Layout, Menu, theme } from "antd";
import { Footer } from "antd/es/layout/layout";
import logo from "../../assets/FieldXDashboard.svg";
import location from "../../assets/location.svg";
import { Link, Outlet } from "react-router-dom";
import user from "../../assets/user.png";
import arrow from "../../assets/chevron-down.svg";
const { Header, Sider } = Layout;
const DashboardLayout = () => {
  const {
    token: { colorBgContainer },
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
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
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
