/** @format */

import Buttons from "./components/Buttons";

import { Typography } from "antd";
import FormTextField from "./components/FormTextFields";

const { Title } = Typography;

const DesignSystem: React.FC = () => (
  <>
    <Title level={2}>Buttons</Title>
    <Buttons />
    <FormTextField />
  </>
);

export default DesignSystem;
