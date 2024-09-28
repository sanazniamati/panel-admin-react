/** @format */

import { Button, Flex, Modal, TableColumnsType } from "antd";
import ITableItems from "./tableItems";
import { DeleteOutlined, EditOutlined, ExportOutlined } from "@ant-design/icons";
import { ROUTES } from "../../../../routes/routesUrls";
import { useNavigate } from "react-router-dom";

export const TableColumns = () => {
  const navigate = useNavigate();
  const columns: TableColumnsType<ITableItems> = [
    {
      title: "#",
      dataIndex: "rowNum",
      key: "rowNum",
      rowScope: "row",
      width: 64,
      fixed: "left",
      className: "!text-center",
    },
    {
      title: "Full Name",
      dataIndex: "fullname",
      key: "fullname",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => {
        return (
          <Flex align="center" gap={6}>
            <div
              className={`w-3 h-3 rounded-full border border-[#DEE2E6] ${
                text === 1 ? "bg-[#56BA28]" : text === 2 ? "bg-[#FF1F25]" : "bg-[#495057]"
              }`}
            ></div>
            {text === 1 ? "Approved" : text === 2 ? "Rejected" : "Blocked"}
          </Flex>
        );
      },
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Date of Birth",
      dataIndex: "birthDate",
      key: "birthDate",
    },
    {
      title: "",
      dataIndex: "action",
      key: "action",
      render: (text, record, rowIndex) => {
        return (
          <Flex align="center" justify="center" gap="small">
            <Button
              className="tableActionButton"
              icon={<ExportOutlined />}
              onClick={() => navigate(ROUTES.showCustomer.replace(":id", `${record.id}`))}
            />
            <Button
              className="tableActionButton"
              icon={<EditOutlined />}
              onClick={() => navigate(`/customers/editCustomer/${record.id}`)}
            />
            <Button
              className="tableActionButton"
              icon={<DeleteOutlined />}
              //   onClick={() => {
              //     Modal.confirm({
              //       title: "Are you sure?",
              //       open,
              //       footer: (_, { CancelBtn }) => (
              //         <>
              //           <Button onClick={() => handleDelete(record.id)}>
              //             <DeleteOutlined />
              //             Delete
              //           </Button>
              //           <CancelBtn />
              //         </>
              //       ),
              //     });
              //   }}
            />
          </Flex>
        );
      },
    },
  ];

  return columns;
};
