/** @format */

import { Breadcrumb } from "antd";

const NewCustomer: React.FC = () => {
  return (
    <div style={{ background: "lightGray", height: "100vh" }}>
      <Breadcrumb
        items={[
          {
            title: "Dashboard",
          },
          {
            title: "Customers'List",
          },
          {
            title: <a href="">New Customers</a>,
          },
        ]}
      />
    </div>
  );
};
export default NewCustomer;
