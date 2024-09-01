/** @format */

import { Breadcrumb, Button, Flex, Input, Typography } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import CustomersTable from "./components/customerTable";
const { Title } = Typography;

const Customers: React.FC = () => {
  const navigate = useNavigate();
  const handleNewCustomer = () => {
    navigate("/customer/newCustomer");
  };
  return (
    <Flex vertical>
      <Title level={3}>Customers' List</Title>
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
        <Button type="primary" ghost size="large" onClick={handleNewCustomer}>
          <PlusOutlined />
          New Customer
        </Button>
        <Input style={{ width: "30%" }} size="large" placeholder="search" prefix={<SearchOutlined />} />
      </Flex>

      {/* table */}
      <CustomersTable />
    </Flex>
  );
};
export default Customers;
