/** @format */

import { Flex, Input, Form } from "antd";
import BirthDate from "./components/birthDate";

const NewCustomerManualy = () => {
  return (
    <Flex className="h-[764px] px-4">
      <Flex vertical className="w-[758px]">
        <div className=" bg-red-400">
          <Form name="firstName" layout="horizontal" labelCol={{ span: 4 }} wrapperCol={{ span: 20 }} className="">
            <Form.Item
              layout="vertical"
              label="First Name"
              name="firstName"
              rules={[{ required: true }]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              className="bg-purple-500 "
            >
              <Input />
            </Form.Item>
            <Form.Item
              layout="vertical"
              label="Last Name"
              name="lastName"
              rules={[{ required: true }]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              className="bg-purple-200"
            >
              <Input />
            </Form.Item>
            <Form.Item
              layout="vertical"
              label="ID Number"
              name="firstName"
              rules={[{ required: true }]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              help={"The ID number should be 10 characters."}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <BirthDate />
            </Form.Item>
            <Form.Item
              layout="vertical"
              label="Phone Number"
              name="phone"
              rules={[{ required: true }]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              className="bg-purple-200"
            >
              <Input />
            </Form.Item>
            <Form.Item
              layout="vertical"
              label="Email"
              name="email"
              rules={[{ required: true }]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              className="bg-purple-400 mb-16"
            >
              <Input />
            </Form.Item>
          </Form>
        </div>
        <div className="h-[40px] bg-red-600 mt-4">2</div>
      </Flex>
      <Flex className=" bg-green-400 w-[368px] ml-4">right</Flex>
    </Flex>
  );
};

export default NewCustomerManualy;
