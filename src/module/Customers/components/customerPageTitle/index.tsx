/** @format */

import { Breadcrumb, Flex, Typography } from "antd";
import { breadCrumbItems } from "./breadCrumbItems";
import DynamicBreadcrumbs from "./DynamicBreadcrumbs";

const { Title } = Typography;

const CustmerPageTitle: React.FC = () => {
  return (
    <Flex vertical className=" bg-green-300">
      <Title level={3}>Customers' List</Title>
      <Breadcrumb items={breadCrumbItems} />
      {/* <DynamicBreadcrumbs /> */}
    </Flex>
  );
};
export default CustmerPageTitle;
