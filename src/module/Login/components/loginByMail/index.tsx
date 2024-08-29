/** @format */

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { App, Button, Checkbox, Form, FormProps, Input } from "antd";
import { FieldType } from "../../types/loginFieldType";
import { useLoginUserMutation } from "../../../../services/authApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch } from "../../../../app/hooks";
import { setUser } from "../../../../featchers/authSlice";
import { ROUTES } from "../../../../routes/routesUrls";

const LoginByMail = ({
  onFinishFailed,
  autoLogin,
  changeAutoLogin,
  formValue,
  setFormValue,
}: any) => {
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
          setUser({ token: result.data?.token, name: result.data?.user.name })
        );
        navegate(ROUTES.home);
      }
    });
  };
  const handleOnChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleLoginByMail = async () => {
    // console.log(sanaz)
  };

  return (
    <>
      <Form
        name="login"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          name="email"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input
            name="email"
            value={email}
            onChange={handleOnChange}
            prefix={<UserOutlined />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input.Password
            name="password"
            value={password}
            onChange={handleOnChange}
            prefix={<LockOutlined />}
            placeholder="Password"
          />
        </Form.Item>
        {/* <Form.Item<FieldType>>
          <Checkbox name="remember" value={remember} checked={autoLogin} onChange={changeAutoLogin}>
            Keep me logged in
          </Checkbox>
          <a style={{ float: "right" }} href="">
            Forgot password
          </a>
        </Form.Item> */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            onClick={handleLoginByMail}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginByMail;
