const MessageBox = (props) => {
  return (
    <div
      className={
        props.receive
          ? "dc-message-box dc-message-box-receive my-1"
          : "dc-message-box dc-message-box-send my-1"
      }
    >
      <div className="dc-profile mx-2">
        <img
          src={
            props.receive
              ? "https://loremflickr.com/g/240/240/portrait"
              : "https://loremflickr.com/g/240/240/girl"
          }
          width="32"
          alt=""
          className="rounded-circle"
        />
        <span style={{ fontSize: "0.7rem" }} className="profile-time">
          14.32
        </span>
      </div>
      <div className="dc-message">
        <div
          className={
            props.receive
              ? "message-text bg-light p-2 rounded"
              : "message-text bg-success text-light p-2 rounded"
          }
        >
          {props.msg}
        </div>
      </div>
    </div>
  );
};

const DetailChat = (props) => {
  const conversation = [
    {
      receive: true,
      message: "Jo what's a nice chilled movie I can go watch with my mom?",
    },
    {
      receive: false,
      message:
        "Well there's a few showing at the moment. Do you mind a romance drama type of movie?",
    },
    {
      receive: true,
      message: "Yeah man that should be fine.",
    },
    {
      receive: false,
      message:
        "Okay great. You should check out 50 shades - don't watch the trailer - it will spoil the movie for you. It has some adorable moments.",
    },
    {
      receive: false,
      message:
        "Fifty Shades of Grey is a 2011 erotic romance novel by British author E. L. James. It is the first instalment in the Fifty Shades trilogy that traces the deepening...",
    },
  ];
  return (
    <div id="dashboard-detail-chat">
      <div id="dc-header">
        <div id="dc-name" onClick={props.onProfileClicked} className="ml-4 p-3">
          <b>Matt Thompson</b> is typing...
        </div>
        <div id="dc-icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#3c3c3c"
            className="bi bi-star"
            viewBox="0 0 16 16"
            id="dc-star"
          >
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-telephone"
            viewBox="0 0 16 16"
            id="dc-voice"
          >
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-camera-video"
            viewBox="0 0 16 16"
            id="dc-video"
          >
            <path
              fillRule="evenodd"
              d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175l3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"
            />
          </svg>
        </div>
      </div>

      <div id="dc-content" className>
        <div className="dc-messages my-4 px-3">
          {conversation.map((c, index) => (
            <MessageBox msg={c.message} receive={c.receive} key={index} />
          ))}
        </div>
        <div className="dc-reply px-3">
          <div id="dc-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-link-45deg"
              viewBox="0 0 16 16"
            >
              <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
              <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z" />
            </svg>
          </div>
          <div id="dc-text" className="w-100">
            <input
              className="w-100 p-1 rounded"
              type="text"
              placeholder="Type your message..."
            />
          </div>
          <div id="dc-emoticon" className="mx-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-emoji-laughing"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zM7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z" />
            </svg>
          </div>
          <div id="dc-send" className="rounded-circle p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-send"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="10" y1="14" x2="21" y2="3" />
              <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailChat;
