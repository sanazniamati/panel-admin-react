/** @format */
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import Customers from "../../Pages/Customers";
import Analytics from "../../Pages/Analytics";
import Messages from "../../Pages/Messages";
import Setting from "../../Pages/Setting";
import Help from "../../Pages/Help";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/help" element={<Help />} />
    </Routes>
  );
}
export default AppRoutes;
