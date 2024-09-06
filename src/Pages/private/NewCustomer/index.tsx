/** @format */

import { Breadcrumb, Flex } from "antd";
import NewCustomerManully from "../../../module/NewCustomerManualy";
import NewCustomerLayout from "./newCustomerLayout";
import NewCustomerByFile from "../../../module/NewCustomerByFIle";

const NewCustomerPage: React.FC = () => {
  return (
    <Flex vertical className="bg-yellow-200 py-4">
      <NewCustomerLayout>
        <NewCustomerManully />
        <NewCustomerByFile />
      </NewCustomerLayout>
    </Flex>
  );
};
export default NewCustomerPage;
