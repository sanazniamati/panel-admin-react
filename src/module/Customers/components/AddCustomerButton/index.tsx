/** @format */

import React from "react";
import { Button, Dropdown, MenuProps } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
// TODO how split items
// import { addBtnItems } from "./addBtnItems";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <Link to="/customers/newCustomer">Importing by a file</Link>,
  },
  {
    key: "2",
    label: <Link to="/customers/newCustomer">Entering manually</Link>,
  },
];

const AddCustomerButton: React.FC = () => (
  <Dropdown className="h-10" menu={{ items }} placement="bottomLeft">
    <Button>
      <PlusOutlined />
      New Customer
    </Button>
  </Dropdown>
);

export default AddCustomerButton;
