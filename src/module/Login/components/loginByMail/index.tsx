/** @format */

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { App, Button, Checkbox, Flex, Form, FormProps, Input } from "antd";
import { FieldType } from "../../types/loginFieldType";
import { useLoginUserMutation } from "../../../../services/authApi/authApi";
import Link from "antd/es/typography/Link";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../app/hooks";
import { setUser } from "../../../../featchers/auth/authSlice";
import { ROUTES } from "../../../../routes/routesUrls";
import { useState } from "react";

const LoginByMail = ({ onFinishFailed, autoLogin, changeAutoLogin, formValue, setFormValue }: any) => {
  const [rememberChecked, setRememberChecked] = useState<boolean>(false);
  const navegate = useNavigate();
  const { message } = App.useApp();

  const { email, password, mobile, captcha, remember } = formValue;
  const [trigger] = useLoginUserMutation();

  const dispatch = useAppDispatch();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    // if (email && password) {
    //   await trigger({ email: email, password: password });
    // } else {
    //   toast.error("Please fill all inputs");
    // }
    await trigger({ email: email, password: password }).then((result) => {
      if (result.data) {
        message.success("Login successful");
        dispatch(
          setUser({ token: result.data?.token, name: result.data?.user.name, rememberChecked: rememberChecked })
        );
        navegate(ROUTES.customers);
      }
    });
  };
  const handleOnChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
    console.log("remember", remember);
  };

  const handleLoginByMail = async () => {
    // console.log(sanaz)
  };

  return (
    <>
      <Form name="login" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
        <Form.Item<FieldType> name="email" rules={[{ required: true, message: "Please input your Email!" }]}>
          <Input name="email" value={email} onChange={handleOnChange} prefix={<UserOutlined />} placeholder="Email" />
        </Form.Item>
        <Form.Item<FieldType> name="password" rules={[{ required: true, message: "Please input your Password!" }]}>
          <Input.Password
            name="password"
            value={password}
            onChange={handleOnChange}
            prefix={<LockOutlined />}
            placeholder="Password"
          />
        </Form.Item>
        {/* <Form.Item<FieldType>>
          <Checkbox name="remember" value={remember} onChange={handleOnChange}>
            Keep me logged in
          </Checkbox>
          <a style={{ float: "right" }} href="">
            Forgot password
          </a>
        </Form.Item> */}
        <Flex justify="space-between" className="py-3">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox
              checked={rememberChecked}
              onChange={(e) => {
                setRememberChecked(e.target.checked), console.log(rememberChecked);
              }}
            >
              Remember me
            </Checkbox>
          </Form.Item>

          <Link href="#"> Forgot password?</Link>
        </Flex>
        <Form.Item>
          <Button type="primary" htmlType="submit" block onClick={handleLoginByMail}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginByMail;
