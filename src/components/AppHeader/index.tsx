/** @format */
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  BellOutlined,
  DownOutlined,
  MailOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Badge, Button, Dropdown, Flex, Layout, MenuProps, Space, theme } from "antd";
import Avatar from "../../assets/img/avatar.jfif";
import { selectAuthName } from "../../featchers/authSlice";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";

const { Header } = Layout;

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "sanaz",
  },
  {
    key: "2",
    label: "33 years old",
    disabled: true,
  },
  {
    key: "3",
    label: "booshehr",
    disabled: true,
  },
];

interface AppHeaderPropsInterface {
  collapsed: boolean;
  setCollapsed: any;
}

const AppHeader: React.FC<AppHeaderPropsInterface> = ({ collapsed, setCollapsed }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // TODO
  const name = useAppSelector(selectAuthName);
  console.log("name :", name);

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
      <Flex
        gap={"middle"}
        style={
          {
            // background: "pink",
            // alignItems: "center",
          }
        }
      >
        <Flex
          align="center"
          justify="center"
          style={{
            border: 1,
            borderStyle: "solid",
            borderColor: "gray",
            borderRadius: 8,
            width: 40,
            height: 40,
          }}
        >
          <Badge dot>
            <BellOutlined />
          </Badge>
        </Flex>

        <Flex
          align="center"
          justify="center"
          style={{
            border: 1,
            borderStyle: "solid",
            borderColor: "gray",
            borderRadius: 8,
            width: 40,
            height: 40,
            display: "flex",
          }}
        >
          <MailOutlined />
        </Flex>

        <Flex
          align="center"
          justify="center"
          style={{
            height: 40,
            border: 1,
            borderStyle: "solid",
            borderColor: "gray",
            borderRadius: 8,
            gap: 8,
            padding: 8,
          }}
        >
          <img
            src={Avatar}
            alt="Avatar"
            style={{ width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center" }}
          />
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                {name}
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Flex>
      </Flex>
    </Header>
  );
};

export default AppHeader;
