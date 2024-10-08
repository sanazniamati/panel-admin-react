/** @format */

import React from "react";
import { Flex, type TableColumnsType } from "antd";
import { TableColumns } from "./columns";
import Table from "antd/es/table";
import { omit } from "lodash";
import ITableItems from "./tableItems";
import { useGetAllCustomersQuery } from "../../../../services/customerApi/customerApi";
import { useCustomerContext } from "../../contex";

const CustomersTable: React.FC = () => {
  let tabelRowNum = 0;
  const { values } = useCustomerContext();
  const { searchTerm } = values;
  const { data } = useGetAllCustomersQuery(searchTerm);
  console.log("TableData", data);
  const TableDataSource: ITableItems[] = [];
  if (data) {
    data.map((record: any) => {
      tabelRowNum += 1;
      TableDataSource.push({
        rowNum: tabelRowNum,
        fullname: record.firstName + " " + record.lastName,
        status: record.status,
        email: record.email,
        birthDate: record.birthDayDate,
        id: record.id,
      });
    });
  }

  const columns = TableColumns();

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
    <Flex align="center" className="p-4 bg-white rounded-lg">
      <Table
        className="w-full"
        rowKey={(record) => record.id}
        columns={newColumns}
        dataSource={TableDataSource}
        pagination={{
          pageSize: 10,
          position: ["bottomLeft"],
        }}
        bordered
      />
    </Flex>
  );
};

export default CustomersTable;
