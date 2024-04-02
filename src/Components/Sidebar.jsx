import "../App.css"
import { SidebarData } from "./SidebarData"
import { Link } from "react-router-dom";
import React, { useState } from "react";
import k from "../image/k.jpg"
const Sidebar = () => {
  const [selected, setSelected] = useState("");

  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={k} alt="" />
        <span>Admin</span>
      </div>
      <hr />
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >

              {/* link the page in  */}
              
              <Link to={item.link}>
              <item.icon />             
              <span className="heading">{item.heading}</span></Link>
            </div>
          );
        })}

        <div className="logout">
          <hr />
        </div>
       <br/>
       {/* <br/>
        <div className="menuItem">
          <div>
            <i class="bi bi-box-arrow-right"></i>
           
          </div>
          <span></span>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;

