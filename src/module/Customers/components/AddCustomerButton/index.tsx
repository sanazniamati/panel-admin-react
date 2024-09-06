/** @format */

import React, { useState } from "react";
import { Button, Dropdown, MenuProps } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
// TODO how split items
// import { addBtnItems } from "./addBtnItems";

type addCustomerBtnType = "addManully" | "addByFile" | "";

const AddCustomerButton: React.FC = () => {
  // const [addCustomerBtn, setAddCustomerBtn] = useState<addCustomerBtnType>("");

  // const handleAddCustomer = () => {
  //   if ((items[0]?.key = "1")) {
  //     setAddCustomerBtn("addByFile");
  //   } else if ((items[1]?.key = "2")) {
  //     setAddCustomerBtn("addManully");
  //   }
  // };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link to="/customers/newCustomerByFile">Importing by a file</Link>,
    },
    {
      key: "2",
      label: <Link to="/customers/editCustomer">Entering manually</Link>,
    },
  ];
  return (
    <Dropdown className="h-10" menu={{ items }} placement="bottomLeft">
      <Button>
        <PlusOutlined />
        New Customer
      </Button>
    </Dropdown>
  );
};

export default AddCustomerButton;
