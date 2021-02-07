const Option = (props) => {
  return (
    <div className="b-option text-light rounded p-1">
      <div className="b-text ml-2">{props.bText}</div>
      <div className="b-number mr-2">{props.bNumber}</div>
    </div>
  );
};

const Board = () => {
  const bOptions = [
    {
      text: "All",
      number: 89,
    },
    {
      text: "Messages",
      number: 11,
    },
    {
      text: "Unread",
      number: 4,
    },
    {
      text: "Important",
      number: 1,
    },
    {
      hr: true,
    },
    {
      text: "Teams",
      number: 2,
    },
    {
      text: "Groups",
      number: 4,
    },
    {
      text: "Channels",
      number: 2,
    },
    {
      text: "Locations",
      // number: 89,
    },
    {
      text: "Media",
      number: 88,
    },
    {
      hr: true,
    },
    {
      text: "Help",
      // number: 88,
    },
    {
      text: "Settings",
      // number: 88,
    },
  ];
  return (
    <div id="dashboard-board">
      <div id="b-header" className="text-light">
        <h2 id="b-title" className="ml-3">
          Inbox
        </h2>
        <div
          id="b-add"
          className="p-2 rounded mr-3"
          style={{ cursor: "pointer", backgroundColor: "#1b1b1b" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-person-plus-fill"
            viewBox="0 0 16 16"
          >
            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            <path
              fillRule="evenodd"
              d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
            />
          </svg>
        </div>
      </div>
      <div id="b-options" className="m-4">
        {bOptions.map((bOption, index) =>
          bOption.hr ? (
            <hr className="bg-secondary mx-2" key={index} />
          ) : (
            <Option bText={bOption.text} bNumber={bOption.number} key={index} />
          )
        )}
      </div>
    </div>
  );
};

export default Board;
