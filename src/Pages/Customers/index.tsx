/** @format */

import { Breadcrumb, Button, Flex, Input, Space } from "antd";
import CustomersTable from "../../components/CustomerTable";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";

import CustomersTableCopy from "../../components/CustomerTableCopy/index";

const Customers: React.FC = () => {
  return (
    <div>
      Customers' List
      <Breadcrumb
        items={[
          {
            title: "Dashboard",
          },
          {
            title: <a href="">Customers'List</a>,
          },
        ]}
      />
      {/* button &serch */}
      <Flex
        style={{
          justifyContent: "space-between",
          marginTop: 32,
          // background: "pink",
        }}
      >
        <Button type="primary" ghost size="large">
          <PlusOutlined />
          New Customer
        </Button>
        <Input style={{ width: "30%" }} size="large" placeholder="search" prefix={<SearchOutlined />} />
      </Flex>
      {/* table */}
      <CustomersTable />
      {/* <CustomersTableCopy /> */}
    </div>
  );
};
export default Customers;
