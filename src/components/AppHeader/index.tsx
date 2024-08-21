/** @format */
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  BellOutlined,
  DownOutlined,
  MailOutlined,
  // MenuFoldOutlined,
  // MenuUnfoldOutlined,
  //   UploadOutlined,
  //   UserOutlined,
  //   VideoCameraOutlined,
} from "@ant-design/icons";
import { Badge, Button, Layout, Menu, theme } from "antd";
import Avatar from "../../assets/img/avatar.jfif";

const { Header, Sider, Content } = Layout;

interface AppHeaderPropsInterface {
  collapsed: boolean;
  setCollapsed: any;
}

const AppHeader: React.FC<AppHeaderPropsInterface> = ({ collapsed, setCollapsed }) => {
  // const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0px 32px 0px 0px",
        background: colorBgContainer,
      }}
    >
      <Button
        type="text"
        icon={collapsed ? <ArrowRightOutlined /> : <ArrowLeftOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          background: "red",
          // position: "absolute",
          // left: "-30 ",
          // top: 0,
          fontSize: "16px",
          width: 40,
          height: 40,
        }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            background: "gray",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Badge dot>
            <BellOutlined />
          </Badge>
        </div>
        <div
          style={{
            width: 40,
            height: 40,
            background: "yellow",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MailOutlined />
        </div>
        <div
          style={{
            width: 174,
            height: 40,
            // background: "red",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: 1,
            borderRadius: 8,
            // borderColor: "#E9ECEF",
            borderColor: "red",
            gap: 8,
          }}
        >
          <div>
            <img
              src={Avatar}
              alt="Avatar"
              style={{ width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center" }}
            />
          </div>
          <div style={{ color: "#343A40", fontWeight: 500, fontSize: 14, lineHeight: 24 }}>Derek Alvarado</div>
          <div>
            <DownOutlined style={{ width: 6.5, height: 3.5 }} />
          </div>
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;
