/** @format */

import React, { useState } from "react";
import { Form, Input, Tabs, Checkbox, Button, Card, Flex, FormProps, Space } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { GithubOutlined, GoogleOutlined, LinkedinOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { ROUTES } from "../../routes/routesUrls";
import { useNavigate } from "react-router-dom";
import LoginByMail from "./components/loginByMail";

const { TabPane } = Tabs;
import { FieldType } from "../Login/types/loginFieldType";
import LoginByMobile from "./components/loginByMobile";
// import { useLoginUserMutation } from "../../services/authApi";

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const initialState = {
  email: "",
  password: "",
  remember: true,
  mobile: "",
  captcha: "",
};
const LoginDemo: React.FC = () => {
  const [formValue, setFormValue] = useState<FieldType>(initialState);
  const [showRegister, setShowRegister] = useState(false);
  const [type, setType] = useState<string>("tab1");
  const [autoLogin, setAutoLogin] = useState<boolean>(true);

  // const [trigger, { data }] = usePostTodoMutation();
  // const [trigger, { data }] = useLoginUserMutation();

  const onTabChange = (key: string) => {
    setType(key);
  };

  const changeAutoLogin = (e: CheckboxChangeEvent) => {
    setAutoLogin(e.target.checked);
  };
  // const handleLoginByMail = () => {
  //   console.log(data);
  //   trigger({ email: "sanaz@yahoo.com", password: "123456" });
  // };

  return (
    <>
      {/* <button onClick={handleLoginByMail}>CLICK</button>
      <h2>{data?.message}</h2> */}
      <Flex justify="center" align="center" style={{ height: "100vh" }}>
        <Card style={{ width: 400, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
          <h2>{!showRegister ? "Login" : "Register"}</h2>
          <Tabs activeKey={type} onChange={onTabChange}>
            <TabPane tab="Account" key="tab1">
              <LoginByMail
                autoLogin={autoLogin}
                changeAutoLogin={changeAutoLogin}
                onFinishFailed={onFinishFailed}
                // onFinish={onFinish}
                formValue={formValue}
                setFormValue={setFormValue}
              />
            </TabPane>
            <TabPane tab="Mobile" key="tab2">
              <LoginByMobile onFinishFailed={onFinishFailed} />
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
    </>
  );
};

export default LoginDemo;
