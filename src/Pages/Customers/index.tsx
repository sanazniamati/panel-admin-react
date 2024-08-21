/** @format */

import { Breadcrumb, Button } from "antd";
import CustomersTable from "../../components/CustomerTable";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";

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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 32,
          background: "pink",
        }}
      >
        <div>
          <Button type="primary" ghost>
            <PlusOutlined />
            New Customer
          </Button>
        </div>
        <div>
          <Button icon={<SearchOutlined />}>Search</Button>
        </div>
      </div>
      {/* table */}
      <div
        style={{
          marginTop: 16,
          background: "green",
        }}
      >
        <div
          style={{
            padding: 16,
            background: "lightGreen",
          }}
        >
          <CustomersTable />
        </div>
        <div
          style={{
            padding: 16,
          }}
        >
          paginate
        </div>
      </div>
    </div>
  );
};
export default Customers;
