import "./topbar.scss";
import { Person, Mail, Height } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            MANASA R
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>9345739228</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>manasaramkuamr37@gmail.com</span>
          </div><br></br>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
