/** @format */

// ant components
import { Flex } from "antd";

// components
import CustmerPageTitle from "./components/customerPageTitle";
import CustomerPageContent from "./components/customerPageContent";

const Customers: React.FC = () => {
  return (
    <Flex vertical>
      <CustmerPageTitle />
      <CustomerPageContent />
    </Flex>
  );
};
export default Customers;
