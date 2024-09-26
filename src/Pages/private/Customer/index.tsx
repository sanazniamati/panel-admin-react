/** @format */

import Customers from "../../../module/Customers";
import { CustomersProvider } from "../../../module/Customers/contex";

const CustomersPage = () => {
  return (
    <CustomersProvider>
      <Customers />
    </CustomersProvider>
  );
};
export default CustomersPage;
