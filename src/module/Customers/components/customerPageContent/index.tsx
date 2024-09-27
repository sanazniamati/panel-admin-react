/** @format */

import { SearchOutlined } from "@ant-design/icons";
import { Flex, Input } from "antd";
import CustomersTable from "../customerTable";
import AddCustomerButton from "../AddCustomerButton";

const CustomerPageContent: React.FC = () => {
  return (
    <Flex vertical>
      {/* button &serch */}
      <Flex justify="space-between" align="center" className="mt-8">
        <AddCustomerButton />
        <Input style={{ width: "30%" }} size="large" placeholder="search" prefix={<SearchOutlined />} />
      </Flex>

      {/* CustomerTable */}
      <CustomersTable />
    </Flex>
  );
};

export default CustomerPageContent;
