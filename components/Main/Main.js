import Icons from "./Sections/Icons";
import Ilustraciones from "./Sections/Ilustraciones";
import "./main.css";
import UIDesign from "./Sections/UIDesign";
import Learn from "./Sections/Learn";
import Blogs from "./Sections/Blogs";
import Colors from "./Sections/Colors";
import Various from "./Sections/Various";

const Main = () => {
  return (
    <div className="section-main">
      <Icons />
      <Ilustraciones />
      <UIDesign />
      <Colors/>
      <Learn/> 
      <Blogs/>
      <Various/>
    </div>
  );
};

export default Main;
