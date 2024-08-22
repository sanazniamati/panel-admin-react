/** @format */

import React, { useState } from "react";
import type { TableColumnsType, TableProps } from "antd";
import { Badge, Space } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  ExportOutlined,
} from "@ant-design/icons";
// import { CustomersDataType, getCustomers } from "../../API";
import Table from "antd/es/table";
import { omit } from "lodash";
type OnChange = NonNullable<TableProps<DataType>["onChange"]>;
type Filters = Parameters<OnChange>[1];

type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[2]>;

interface DataType {
  key: React.Key;
  name: string;
  status: "Approved" | "Blocked" | "Rejected";
  email: string;
  birthDate: string;
}

const dataSource: DataType[] = [];
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
  const [filteredInfo, setFilteredInfo] = useState<Filters>({});
  const [sortedInfo, setSortedInfo] = useState<Sorts>({});

  const handleChange: OnChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter as Sorts);
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: "#",
      dataIndex: "key",
      rowScope: "row",
      width: 40,
      fixed: "left",
    },
    {
      title: "Full Name",
      dataIndex: "name",
      key: "name",
      filters: [
        { text: "Joe", value: "Joe" },
        { text: "Jim", value: "Jim" },
      ],
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value as string),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
      ellipsis: true,
      onCell: (data, index) => {
        return {
          className: (index || 0) % 2 !== 0 ? "" : "",
        };
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      filters: [
        { text: "Approved", value: "Approved" },
        { text: "Blocked", value: "Blocked" },
        { text: "Rejected", value: "Rejected" },
      ],
      filteredValue: filteredInfo.status || null,
      onFilter: (value, record) => record.status.includes(value as string),
      ellipsis: true,
      width: "20%",
      // TODO
      render: () => {
        return <Badge size="default" status="success" />;
      },
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => a.email.length - b.email.length,
      sortOrder: sortedInfo.columnKey === "email" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Date of Birth",
      dataIndex: "birthDate",
      key: "birthDate",
      filters: [
        { text: "year", value: "1996-5-2" },
        // { text: "New York", value: "New York" },
      ],
      filteredValue: filteredInfo.address || null,
      onFilter: (value, record) => record.birthDate.includes(value as string),
      sorter: (a, b) => a.birthDate.length - b.birthDate.length,
      sortOrder: sortedInfo.columnKey === "birthDate" ? sortedInfo.order : null,
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
              <ExportOutlined />
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
              <EditOutlined />
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
  const newColumns: TableColumnsType<DataType> = columns
    ? columns.map((column) => ({
        ...column,
        onCell: (record, index) => {
          const defaultOnCell = column.onCell
            ? column.onCell(record, index)
            : {};
          const defaultClassName = `${column.className} ${
            defaultOnCell.className || ""
          }`;
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
    <>
      <Table
        style={{
          padding: 16,
          marginTop: 16,
          // background: "lightGreen",
        }}
        columns={newColumns}
        dataSource={dataSource}
        pagination={{
          pageSize: 10,
          position: ["bottomLeft"],
        }}
        bordered
        onChange={handleChange}
      />
    </>
  );
};

export default CustomersTable;
