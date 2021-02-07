import { useState } from "react";

import "./Dashboard.css";

// components
import Apps from "./Apps";
import Board from "./Board";
import Chats from "./Chats";
import DetailChat from "./DetailChat";
import Edit from "./Edit";

const Dashboard = () => {
  const [boardState, setBoardState] = useState(true);
  const setBoard = () => {
    setBoardState(!boardState);
  };

  return (
    <div id="dashboard">
      <Apps onMenuClicked={setBoard} />
      <Board bState={boardState} />
      <Chats />
      <DetailChat />
      <Edit />
    </div>
  );
};

export default Dashboard;
