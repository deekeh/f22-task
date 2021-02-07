import gmail from "./img/gmail.png";

import { Dropdown } from "react-bootstrap";

const Edit = () => {
  return (
    <div id="dashboard-edit">
      <div id="e-header">
        <div id="e-notif" className="ml-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-bell"
            viewBox="0 0 16 16"
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
          </svg>
        </div>
        <div id="e-name" className="mr-3">
          <Dropdown>
            <Dropdown.Toggle className="bg-light text-secondary border-secondary">
              Johan Horn
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Something 1</Dropdown.Item>
              <Dropdown.Item>Something 2</Dropdown.Item>
              <Dropdown.Item>Something 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <div id="e-body">
        <div id="e-apps">
          <div id="e-gmail" className="ml-4">
            <img src={gmail} alt="gmail-logo" width="20" />
          </div>
          <div id="e-menu" className="mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-three-dots"
              viewBox="0 0 16 16"
            >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          </div>
        </div>

        <div id="e-profile" className="px-4 mt-4">
          <img
            src="https://loremflickr.com/g/240/240/portrait"
            alt="profile-pic"
            width="150"
          />
          <h5 className="mt-3">Matt Thompson</h5>
          <small>Cape Town, RSA</small>
        </div>
        <hr className="mx-2" />

        <div id="e-about" className="px-2">
          <div className="e-about-line mb-1">
            <span className="line-label">Nickname:</span>
            <span className="line-data">
              <b>Triple T</b>
            </span>
          </div>
          <div className="e-about-line mb-1">
            <span className="line-label">Tel:</span>
            <span className="line-data">
              <b>021 88 237 8890</b>
            </span>
          </div>
          <div className="e-about-line mb-1">
            <span className="line-label">Date of Birth:</span>
            <span className="line-data">
              <b>June 20th 1983</b>
            </span>
          </div>
          <div className="e-about-line mb-1">
            <span className="line-label">Gender:</span>
            <span className="line-data">
              <b>Male</b>
            </span>
          </div>
          <div className="e-about-line mb-1">
            <span className="line-label">Language:</span>
            <span className="line-data">
              <b>English</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
