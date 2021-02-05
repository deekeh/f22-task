import "./Dashboard.css";

// components
import Apps from "./Apps";
import Board from "./Board";
import Chats from "./Chats";
import DetailChat from "./DetailChat";
import Edit from "./Edit";

const Dashboard = () => {
  return (
    <div id="dashboard">
      <Apps />
      <Board />
      <Chats />
      <DetailChat />
      <Edit />
    </div>
  );
};

export default Dashboard;
