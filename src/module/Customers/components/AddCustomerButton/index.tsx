/** @format */

import React from "react";
import { Button, Dropdown } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { addBtnItems } from "./items";

const AddCustomerButton: React.FC = () => {
  return (
    <Dropdown className="h-10 text-[#0057FC] border-[#0057FC]" menu={addBtnItems} placement="bottomLeft">
      <Button>
        <PlusOutlined />
        New Customer
      </Button>
    </Dropdown>
  );
};

export default AddCustomerButton;
