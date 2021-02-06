const Chat = (props) => {
  return (
    <div className="c p-3">
      {/* <div className="c-photo"> */}
      <img
        src="https://loremflickr.com/g/32/32/people"
        width="32"
        alt="profie-pic"
        className="rounded-circle"
      />
      {/* </div> */}
      <div className="c-text text-light mx-2">
        <div className="c-name">{props.name}</div>
        <div className="c-msg">{props.msg}</div>
      </div>
      <div className="c-menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#f1f1f1"
          className="bi bi-three-dots"
          viewBox="0 0 16 16"
        >
          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
        </svg>
        <div className="text-light c-duration">1 min</div>
      </div>
    </div>
  );
};

const Chats = () => {
  const chatData = [
    {
      name: "Michelle",
      msg: "Can you send me the client",
    },
    {
      name: "Matt",
      msg: "Busy typing...",
    },
    {
      name: "Justin Engel",
      msg: "Can you look at my carebears?",
    },
    {
      name: "Emile",
      msg: "Hey man if you have a",
    },
    {
      name: "Grant",
      msg: "Tell Matt I'm going to be late.",
    },
  ];
  return (
    <div id="dashboard-chats">
      <div id="c-header" className="px-3">
        <div className="input-group">
          <span className="input-group-text bg-dark border-dark rounded-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </span>
          <input
            className="form-control bg-dark border-dark rounded-0 text-light"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>

      <div id="c-chats" className="my-4">
        {chatData.map((chat) => (
          <Chat name={chat.name} msg={chat.msg} />
        ))}
      </div>
    </div>
  );
};

export default Chats;
