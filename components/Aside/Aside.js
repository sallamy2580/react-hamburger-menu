import "./aside.css";

const Aside = ({ menu, setMenu }) => {
  const handleAside = () => {
    setMenu(false);
  };
  return (
    <div
      className={menu ? "aside-menu active" : "aside-menu"}
      onClick={handleAside}
    >
      <div className="wrapper">
        <div className="menu">
          <h1 className="logo-name">Toolkit</h1>
          <nav>
            <li className="item-menu">
              <a href="#icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M10 3H4C3.447 3 3 3.447 3 4v6c0 .553.447 1 1 1h6c.553 0 1-.447 1-1V4C11 3.447 10.553 3 10 3zM9 9H5V5h4V9zM20 13h-6c-.553 0-1 .447-1 1v6c0 .553.447 1 1 1h6c.553 0 1-.447 1-1v-6C21 13.447 20.553 13 20 13zM19 19h-4v-4h4V19zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4S19.206 3 17 3zM17 9c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2S18.103 9 17 9zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4S9.206 13 7 13zM7 19c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2S8.103 19 7 19z"></path>
                </svg>
                Icons
              </a>
            </li>
            <li className="item-menu">
              <a href="#illustrations">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.404,2.998c-0.757-0.754-2.077-0.751-2.828,0.005l-1.784,1.791L11.586,7H7C6.579,7,6.204,7.263,6.061,7.658l-4,11 c-0.133,0.365-0.042,0.774,0.232,1.049l2,2C4.483,21.898,4.739,22,5,22c0.114,0,0.23-0.02,0.342-0.061l11-4 C16.737,17.796,17,17.421,17,17v-4.586l2.207-2.207c0,0,0,0,0-0.001c0.001,0,0.001,0,0.001,0L21,8.409 c0.378-0.378,0.586-0.881,0.585-1.415c0-0.535-0.209-1.038-0.588-1.415L18.404,2.998z M15.293,11.293 C15.105,11.48,15,11.734,15,12v4.3l-9.249,3.363l4.671-4.671C10.448,14.993,10.474,15,10.5,15c0.828,0,1.5-0.672,1.5-1.5 S11.328,12,10.5,12S9,12.672,9,13.5c0,0.026,0.007,0.052,0.008,0.078l-4.671,4.671L7.7,9H12c0.266,0,0.52-0.105,0.707-0.293 L14.5,6.914L17.086,9.5L15.293,11.293z M18.499,8.085l-2.586-2.586l1.079-1.084l2.593,2.581L18.499,8.085z"></path>
                </svg>
                Illustrations
              </a>
            </li>
            <li className="item-menu">
              <a href="#ui-design">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19,3H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2V5C21,3.897,20.103,3,19,3z M19,5l0.001,4H15h-2 H5V5H19z M5,11h8v8H5V11z M15,19v-8h4.001l0.001,8H15z"></path>
                </svg>
                UI Design
              </a>
            </li>
            <li className="item-menu">
              <a href="#colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
                Colors
              </a>
            </li>
            <li className="item-menu">
              <a href="#learn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                Learn
              </a>
            </li>

            <li className="item-menu">
              <a href="#blogs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7 3H9V21H7zM4 3H6V21H4zM10 3H12V21H10z"></path>
                  <path
                    transform="scale(-1) rotate(69.775 17.21 -24.221)"
                    d="M7.888 11H25.887999999999998V13H7.888z"
                  ></path>
                </svg>
                Blogs
              </a>
            </li>
            <li className="item-menu">
              <a href="#various">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M10 3H4C3.447 3 3 3.447 3 4v6c0 .553.447 1 1 1h6c.553 0 1-.447 1-1V4C11 3.447 10.553 3 10 3zM9 9H5V5h4V9zM20 3h-6c-.553 0-1 .447-1 1v6c0 .553.447 1 1 1h6c.553 0 1-.447 1-1V4C21 3.447 20.553 3 20 3zM19 9h-4V5h4V9zM10 13H4c-.553 0-1 .447-1 1v6c0 .553.447 1 1 1h6c.553 0 1-.447 1-1v-6C11 13.447 10.553 13 10 13zM9 19H5v-4h4V19zM17 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4S19.206 13 17 13zM17 19c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2S18.103 19 17 19z"></path>
                </svg>
                Various
              </a>
            </li>
            <li className="item-menu">
              <a href="#youtube">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21.593,7.203c-0.23-0.858-0.905-1.535-1.762-1.766C18.265,5.007,12,5,12,5S5.736,4.993,4.169,5.404 c-0.84,0.229-1.534,0.921-1.766,1.778c-0.413,1.566-0.417,4.814-0.417,4.814s-0.004,3.264,0.406,4.814 c0.23,0.857,0.905,1.534,1.763,1.765c1.582,0.43,7.83,0.437,7.83,0.437s6.265,0.007,7.831-0.403c0.856-0.23,1.534-0.906,1.767-1.763 C21.997,15.281,22,12.034,22,12.034S22.02,8.769,21.593,7.203z M9.996,15.005l0.005-6l5.207,3.005L9.996,15.005z"></path>
                </svg>
                Youtube
              </a>
            </li>
          </nav>
        </div>
        <div className="info">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
            Share with Friends
          </button>
          <p className="development">Desarrollado por Eduardo Guette</p>
        </div>
      </div>
    </div>
  );
};

export default Aside;
