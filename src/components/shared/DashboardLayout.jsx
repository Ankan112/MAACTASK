import { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { Footer } from "antd/es/layout/layout";
import logo from "../../assets/FieldXDashboard.svg";
import location from "../../assets/location.svg";
import { Link } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
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
          //   theme="dark"
          //   mode="inline"
          defaultSelectedKeys={["1"]}
          style={{
            marginLeft: "42px",
            fontWeight: 400,
            fontSize: "13px",
          }}
          items={[
            {
              key: "1",
              label: <Link to="/dashboard/region">Region</Link>,
            },
            {
              key: "2",
              label: <Link to="/dashboard/region">Area</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
