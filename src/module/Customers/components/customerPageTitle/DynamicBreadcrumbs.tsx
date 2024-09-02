/** @format */

import React from "react";
import { Breadcrumb } from "antd";
import { useLocation, Link } from "react-router-dom";

const breadcrumbNameMap: Record<string, string> = {
  "/home": "Home",
  "/home/users": "Users",
  "/home/settings": "Settings",
  "/home/users/profile": "User Profile",
};

const DynamicBreadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });

  return <Breadcrumb style={{ margin: "16px 0" }}>{extraBreadcrumbItems}</Breadcrumb>;
};

export default DynamicBreadcrumbs;
