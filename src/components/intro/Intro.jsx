import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import pic from './mypic.jpg';


export default function Intro() {
  
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={pic} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There !</h2>
          <h1>I'm Manasa Ramkumar</h1>
          <h3>Student at Madras Institite of Technology<br></br><br></br>Studying Computer Scienece Engineering</h3>
        </div>
      </div>
    </div>
  );
}
