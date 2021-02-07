import { useState } from "react";

// logos
import whatsapp from "./img/whatsapp.png";
import gmail from "./img/gmail.png";
import skype from "./img/skype.png";
import slack from "./img/slack.png";

const Apps = (props) => {
  // const [boardState, setBoardState] = useState(true);
  // const setBoard = () => setBoardState(!boardState);

  return (
    <>
      <div id="dashboard-apps" className="dashboard-item">
        <div onClick={props.onMenuClicked} className="apps-item">
          <svg fill="#c3c3c3" viewBox="0 0 100 80" width="32" height="32">
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="70" height="10"></rect>
          </svg>
        </div>
        <div className="apps-item">
          <img src={whatsapp} alt="whatsapp-logo" />
        </div>
        <div className="apps-item active">
          <img src={gmail} alt="gmail-logo" />
        </div>
        <div className="apps-item">
          <img src={skype} alt="" />
        </div>
        <div className="apps-item">
          <img src={slack} alt="" />
        </div>
        <div className="apps-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#c3c3c3"
            className="bi bi-plus-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Apps;
