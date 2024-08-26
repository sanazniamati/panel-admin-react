/** @format */

import { Button, Form, Input } from "antd";
import { FieldType } from "../../types/loginFieldType";

const LoginByMobile = ({ onFinishFailed }: any) => {
  return (
    <Form onFinishFailed={onFinishFailed}>
      <Form.Item<FieldType> name="mobile" rules={[{ required: true, message: "Please input your Mobile number!" }]}>
        <Input placeholder="Mobile number" />
      </Form.Item>
      <Form.Item<FieldType> name="captcha" rules={[{ required: true, message: "Please input the Captcha!" }]}>
        <Input placeholder="Captcha" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginByMobile;
