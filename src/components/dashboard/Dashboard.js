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
  const [chatsState, setChatsState] = useState(true);
  const [editState, setEditState] = useState(true);

  const setBoard = () => {
    setBoardState(!boardState);
    setChatsState(false);
  };
  const setChats = () => {
    setChatsState(!chatsState);
  };
  const setEdit = () => {
    setEditState(!editState);
  };

  return (
    <div id="dashboard">
      <Apps onMenuClicked={setBoard} />
      <Board bState={boardState} onBOptionClicked={setChats} />
      <Chats cState={chatsState} />
      <DetailChat onProfileClicked={setEdit} />
      <Edit eState={editState} />
    </div>
  );
};

export default Dashboard;
