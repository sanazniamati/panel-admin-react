/** @format */
import { BellOutlined, DownOutlined, MailOutlined, MenuOutlined } from "@ant-design/icons";
import { Badge, Dropdown, Flex, Layout, MenuProps, Space, theme } from "antd";
import Avatar from "../../../../assets/img/avatar.jfif";
import { selectAuthName } from "../../../../featchers/authSlice";
import { useAppSelector } from "../../../../app/hooks";
import { Dispatch, SetStateAction } from "react";
import { useMediaQuery } from "../../../../hooks/mediaQuery";
import { useMainLayoutContext } from "../../contex";

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

const AppHeader: React.FC = () => {
  const { dispatch } = useMainLayoutContext();

  const { setOpenDrawer } = dispatch;
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // TODO
  const name = useAppSelector(selectAuthName);
  const isLaptop = useMediaQuery(991);

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0px 32px 0px 32px",
        background: colorBgContainer,
      }}
    >
      <Flex justify="space-between" style={{ width: "100%" }}>
        {!isLaptop && (
          <MenuOutlined
            onClick={() => {
              setOpenDrawer(true);
            }}
          />
        )}
        <Flex
          gap={12}
          style={{
            alignContent: "center",
            background: "pink",
            // alignItems: "center",
          }}
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
              style={{
                width: 24,
                height: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
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
      </Flex>
    </Header>
  );
};

export default AppHeader;
