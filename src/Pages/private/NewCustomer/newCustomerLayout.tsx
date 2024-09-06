/** @format */

import { Breadcrumb } from "antd";

const NewCustomerLayout = ({ children }: any) => {
  return (
    <>
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
      {children}
    </>
  );
};

export default NewCustomerLayout;
