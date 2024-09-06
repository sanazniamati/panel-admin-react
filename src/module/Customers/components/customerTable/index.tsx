/** @format */

import React from "react";
import type { TableColumnsType } from "antd";
import { Badge, Button, Flex, Space } from "antd";
import { DeleteOutlined, EditOutlined, ExportOutlined } from "@ant-design/icons";
import Table from "antd/es/table";
import { omit } from "lodash";
import ITableItems from "./tableItems";
import { Link } from "react-router-dom";

const dataSource: ITableItems[] = [];
for (let i = 0; i < 100; i++) {
  dataSource.push({
    key: i,
    name: `Edward ${i}`,
    status: "Approved",
    email: `user ${i}@yahoo.com`,
    birthDate: `1996-5-${i}`,
  });
}

const CustomersTable: React.FC = () => {
  const columns: TableColumnsType<ITableItems> = [
    {
      title: "#",
      dataIndex: "key",
      rowScope: "row",
      width: 40,
      // fixed: "left",
    },
    {
      title: "Full Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",

      width: "20%",
      render: (text, record, index) => {
        return (
          <Flex gap={8}>
            <Badge size="default" status="success" />
            {text}
          </Flex>
        );
      },
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      ellipsis: true,
    },
    {
      title: "Date of Birth",
      dataIndex: "birthDate",
      key: "birthDate",
      ellipsis: true,
    },
    {
      title: "",
      dataIndex: "action",
      key: "action",
      render: () => {
        return (
          <div style={{ display: "flex", gap: 8 }}>
            <Space
              style={{
                width: 40,
                height: 40,
                padding: 10,
                border: 1,
                borderStyle: "solid",
                borderColor: "gray",
                borderRadius: 8,
              }}
            >
              <Link to="/customer/detailCustomer">
                <ExportOutlined />
              </Link>
            </Space>
            <Space
              style={{
                width: 40,
                height: 40,
                padding: 10,
                border: 1,
                borderStyle: "solid",
                borderColor: "gray",
                borderRadius: 8,
              }}
            >
              <Link to="/customer/detailCustomer">
                <EditOutlined />
              </Link>
              {/* <Link to="customers/editCustomer">
                <EditOutlined />
              </Link> */}
            </Space>
            <Space
              style={{
                width: 40,
                height: 40,
                padding: 10,
                border: 1,
                borderStyle: "solid",
                borderColor: "gray",
                borderRadius: 8,
              }}
            >
              <DeleteOutlined />
            </Space>
          </div>
        );
      },
    },
  ];
  const newColumns: TableColumnsType<ITableItems> = columns
    ? columns.map((column) => ({
        ...column,
        onCell: (record, index) => {
          const defaultOnCell = column.onCell ? column.onCell(record, index) : {};
          const defaultClassName = `${column.className} ${defaultOnCell.className || ""}`;
          return {
            ...omit(defaultOnCell, "className"),
            className:
              (index || 0) % 2 !== 0
                ? `${defaultClassName} !bg-[#F2F7FF] text-center`
                : `${defaultClassName} text-center`,
          };
        },
      }))
    : [];

  return (
    <Table
      className=" p-4 mt-4"
      columns={newColumns}
      dataSource={dataSource}
      pagination={{
        pageSize: 10,
        position: ["bottomLeft"],
      }}
      bordered
    />
  );
};

export default CustomersTable;
