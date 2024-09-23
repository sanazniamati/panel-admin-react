/** @format */

import { Flex, Typography } from "antd";
import { breadCrumbItems } from "./breadCrumbItems";
import BreadCrum from "../../../../models/breadcrum/breadcrum";

const { Title } = Typography;

const CustmerPageTitle: React.FC = () => {
  return (
    <Flex vertical className=" bg-green-300">
      <Title level={1}>Customer's List</Title>
      <BreadCrum members={breadCrumbItems} />
    </Flex>
  );
};
export default CustmerPageTitle;
