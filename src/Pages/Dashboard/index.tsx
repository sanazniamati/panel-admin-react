/** @format */

import { useAppSelector } from "../../app/hooks";
import { selectAuth } from "../../featchers/authSlice";

const Dashboard: React.FC = () => {
  // const { name } = useAppSelector(selectAuth);
  return (
    <>
      <div style={{ background: "lightGray", height: "100vh" }}>
        Dashboard
        {/* <h2>Welcome {name}</h2> */}
      </div>
      ;
    </>
  );
};
export default Dashboard;
