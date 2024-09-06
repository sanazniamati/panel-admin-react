/** @format */

import type { DatePickerProps } from "antd";
import { DatePicker, Flex, Form, Space } from "antd";
const BirthDate = () => {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <Flex vertical className="mt-11 bg-blue-600">
      <p>Birth of Date</p>
      <Form className="flex ">
        <Form.Item
          layout="vertical"
          label="Month"
          name="month"
          rules={[{ required: true }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <DatePicker onChange={onChange} picker="month" />
        </Form.Item>
        <Form.Item
          layout="vertical"
          label="Day"
          name="day"
          rules={[{ required: true }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <DatePicker onChange={onChange} picker="week" />
        </Form.Item>
        <Form.Item
          layout="vertical"
          label="Year"
          name="year"
          rules={[{ required: true }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <DatePicker onChange={onChange} picker="year" />
        </Form.Item>
      </Form>
    </Flex>
  );
};
export default BirthDate;
