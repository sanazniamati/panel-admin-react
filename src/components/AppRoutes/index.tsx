/** @format */
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/private/Dashboard";
import Customers from "../../Pages/Customers";
import Analytics from "../../Pages/private/Analytics";
import Messages from "../../Pages/private/Messages";
import Setting from "../../Pages/private/Setting";
import Help from "../../Pages/private/Help";
import NewCustomer from "../../Pages/private/NewCustomer";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/customers" element={<Customers />}>
        {/* <Route path="/customers/newCustomer" element={<NewCustomer />} /> */}
      </Route>
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/help" element={<Help />} />
      <Route path="/customers/newCustomer" element={<NewCustomer />} />
    </Routes>
  );
}
export default AppRoutes;
