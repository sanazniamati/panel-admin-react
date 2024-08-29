/** @format */

import { Flex, Form, Input, Row, Col } from "antd";

const FormTextField: React.FC = () => {
  const [form] = Form.useForm();
  return (
    <>
      <Row gutter={[4, 4]}>
        <Col span={8}>
          <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
            <Form.Item name="name" label="Label" rules={[{ required: true }]}>
              <Input placeholder="Placeholder" size="small" />
              <Flex>Extra</Flex>
            </Form.Item>
          </Form>
        </Col>
        <Col span={8}>
          <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
            <Form.Item name="name" label="Label" rules={[{ required: true }]}>
              <Input placeholder="Placeholder" size="small" disabled />
              <Flex>Extra</Flex>
            </Form.Item>
          </Form>
        </Col>
        <Col span={8}>
          <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
            <Form.Item name="name" label="Label" rules={[{ required: true }]}>
              <Input placeholder="Placeholder" size="small" disabled />
              <Flex>Extra</Flex>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};
export default FormTextField;
