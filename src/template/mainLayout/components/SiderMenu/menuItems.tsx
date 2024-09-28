/** @format */

import {
  ControlOutlined,
  HomeOutlined,
  MailOutlined,
  PieChartOutlined,
  QuestionCircleOutlined,
  TeamOutlined,
} from "@ant-design/icons";

export const menuItems = [
  {
    key: "/",
    icon: <HomeOutlined />,
    label: "DASHBOARD",
  },
  {
    key: "/customers",
    icon: <TeamOutlined />,
    label: "CUSTOMERS",
  },
  {
    key: "/analytics",
    icon: <PieChartOutlined />,
    label: "ANALYTICS",
  },
  {
    key: "settings",
    type: "group",
    label: <span className="text-[#495057] text-sm font-medium  mt-8">SETTINGS</span>,
    children: [
      {
        key: "/messages",
        icon: <MailOutlined />,
        label: "MESSAGE",
      },
      {
        key: "/setting",
        icon: <ControlOutlined />,
        label: "SETTING",
      },
      {
        key: "/help",
        icon: <QuestionCircleOutlined />,
        label: "HELP CENTER",
      },
      {
        key: "/design",

        label: "Design System",
      },
    ],
  },
];
