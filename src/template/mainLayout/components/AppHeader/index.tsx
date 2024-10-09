/** @format */
import { BellOutlined, DownOutlined, MailOutlined, MenuOutlined } from "@ant-design/icons";
import { Badge, Button, Dropdown, Flex, Image, Layout, MenuProps, Space, Typography } from "antd";
import Avatar from "../../../../assets/img/avatar.jfif";
import { selectUsername } from "../../../../featchers/auth/authSlice";
import { useAppSelector } from "../../../../app/hooks";
import { useMediaQuery } from "../../../../hooks/mediaQuery";
import { useMainLayoutContext } from "../../contex";
import { Link } from "react-router-dom";
import { BreakPoints } from "../../../../constants/breakPointsNumber";
import ChevronDown from "../../../../assets/img/chevronDown.png";

const { Text } = Typography;

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <Link to="/">Account</Link>,
  },

  {
    key: "2",
    danger: true,
    label: "Logout",
  },
];

const AppHeader: React.FC = () => {
  const userName = useAppSelector(selectUsername);
  const isLaptop = useMediaQuery(BreakPoints.laptop); //greater than 991 is laptob size
  const { dispatch } = useMainLayoutContext();
  const { setOpenDrawer, setOpenNotificationDrawer, setOpenCommentsDrawer } = dispatch;

  return (
    <Flex justify={!isLaptop ? "space-between" : "end"} className=" px-8 py-3 w-full">
      {!isLaptop && (
        <MenuOutlined
          className=" cursor-pointer"
          onClick={() => {
            setOpenDrawer(true);
          }}
        />
      )}
      <Flex gap={12} align="center">
        <Button
          className="headerButton"
          onClick={() => {
            setOpenNotificationDrawer(true);
          }}
        >
          <Badge dot>
            <BellOutlined />
          </Badge>
        </Button>

        <Button className="headerButton" onClick={() => setOpenCommentsDrawer(true)}>
          <MailOutlined />
        </Button>

        <Flex align="center" justify="center" gap={8} className="border rounded-md bg-white h-10 px-2">
          <Image src={Avatar} alt="Avatar" width={24} height={24} />
          <Dropdown menu={{ items }}>
            <Flex justify="center" gap={8} align="center">
              <Text>{userName}</Text>
              {/* <DownOutlined size={24} /> */}
              <Image src={ChevronDown} height={24} width={24} />
            </Flex>
          </Dropdown>
        </Flex>
      </Flex>
    </Flex>
    // </Header>
  );
};

export default AppHeader;
