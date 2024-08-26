/** @format */

// import { Layout } from "antd";

// export const LoginLayout: FC = () => {
//   const [collapsed, setCollapsed] = useState<boolean>(false);

//   return (
//     <Layout>

//     </Layout>
//   );
// };

import React, { useState } from "react";
import { Form, Input, Tabs, Checkbox, Button, Alert, Card, Flex, FormProps, Space } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes/routesUrls";
import { GithubOutlined, GoogleOutlined, LinkedinOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

type FieldType = {
  username?: string;
  password?: string;
  remember?: boolean;
  mobile?: number;
  captcha?: string;
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const LoginDemo: React.FC = () => {
  // const [notice, setNotice] = useState<string>("");
  const [type, setType] = useState<string>("tab2");
  const [autoLogin, setAutoLogin] = useState<boolean>(true);

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const navigate = useNavigate();
    console.log();
    localStorage.setItem("userToken", JSON.stringify(values));
    navigate(ROUTES.home);

    // if (type === "tab1") {
    //   setNotice("");
    //   if (values.username !== "admin" || values.password !== "888888") {
    //     setTimeout(() => {
    //       setNotice("The combination of username and password is incorrect!");
    //     }, 500);
    //   }
    // }
  };

  const onTabChange = (key: string) => {
    setType(key);
  };

  const changeAutoLogin = (e: CheckboxChangeEvent) => {
    setAutoLogin(e.target.checked);
  };

  return (
    <Flex justify="center" align="center" style={{ height: "100vh" }}>
      <Card style={{ width: 400, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <Tabs activeKey={type} onChange={onTabChange}>
          <TabPane tab="Account" key="tab1">
            {/* {notice && <Alert style={{ marginBottom: 24 }} message={notice} type="error" showIcon closable />} */}
            <Form onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
              <Form.Item<FieldType>
                name="username"
                rules={[{ required: true, message: "Please input your Username!" }]}
              >
                <Input placeholder="Username" />
              </Form.Item>
              <Form.Item<FieldType>
                name="password"
                rules={[{ required: true, message: "Please input your Password!" }]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>
              <Form.Item<FieldType>>
                <Checkbox checked={autoLogin} onChange={changeAutoLogin}>
                  Keep me logged in
                </Checkbox>
                <a style={{ float: "right" }} href="">
                  Forgot password
                </a>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Login
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab="Mobile" key="tab2">
            <Form onFinish={onFinish}>
              <Form.Item<FieldType>
                name="mobile"
                rules={[{ required: true, message: "Please input your Mobile number!" }]}
              >
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
          </TabPane>
        </Tabs>
        <Flex gap={8} style={{ textAlign: "center", marginTop: 16, justifyContent: "space-between" }}>
          <Space>
            <GithubOutlined />
            <LinkedinOutlined />
            <GoogleOutlined />
          </Space>

          <a style={{ float: "right" }} href="">
            Register
          </a>
        </Flex>
      </Card>
    </Flex>
  );
};

export default LoginDemo;
