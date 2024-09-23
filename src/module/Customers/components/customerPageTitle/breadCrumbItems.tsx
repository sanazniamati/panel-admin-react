/** @format */

import { Link } from "react-router-dom";
import { ROUTES } from "../../../../routes/routesUrls";

export const breadCrumbItems = [
  {
    title: <Link to={ROUTES.customers}>Customers</Link>,
  },
  {
    title: `Customer's List`,
  },
];
