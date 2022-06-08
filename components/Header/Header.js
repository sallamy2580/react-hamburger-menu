import { Spin as Hamburger } from "hamburger-react";
import "./header.css";

const Header = ({ menu, setMenu }) => {
  const handleMenu = () => {
    !menu ? setMenu(true) : setMenu(false);
  };
  return (
    <div className="header">
      <h1 className="logo-name">Toolkit</h1>
      <button id="menu" className="menu" onClick={handleMenu}>
        <Hamburger
          rounded
          toggled={menu}
          toggle={setMenu}
          easing="ease-in"
          size={28}
        />
      </button>
    </div>
  );
};

export default Header;
