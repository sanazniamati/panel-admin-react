/** @format */

import { SearchOutlined } from "@ant-design/icons";
import { Flex, Input } from "antd";
import CustomersTable from "../customerTable";
import { useNavigate } from "react-router-dom";
import AddCustomerButton from "../AddCustomerButton";

const CustomerPageContent: React.FC = () => {
  const navigate = useNavigate();
  const handleNewCustomer = () => {
    navigate("/customer/newCustomer");
  };
  return (
    <Flex vertical>
      {/* button &serch */}
      <Flex justify="space-between" className="mt-8 bg-green-500">
        <AddCustomerButton />
        <Input style={{ width: "30%" }} size="large" placeholder="search" prefix={<SearchOutlined />} />
      </Flex>

      {/* CustomerTable */}
      <CustomersTable />
    </Flex>
  );
};

export default CustomerPageContent;
