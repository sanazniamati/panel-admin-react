/** @format */

import { Link } from "react-router-dom";
import { ROUTES } from "../../../../routes/routesUrls";

const items = [
  {
    key: "1",
    label: <Link to={ROUTES.newCustomerByFile}>Importing by a file</Link>,
  },
  {
    key: "2",
    label: <Link to={ROUTES.newCustomerManully}>Entering manually</Link>,
  },
];

export const addBtnItems = { items };
