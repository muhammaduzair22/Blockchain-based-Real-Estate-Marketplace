import "./ManageMenu.css";
import { NavLink } from "react-router-dom";
import MenuItemBox from "./MenuItemBox.js";
import { useState} from "react";
var a=0;
const ManageMenu = (props) => {
 const [state,setState]=useState("");
  return (
    <>
      {/* <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        rel="stylesheet"
      /> */}
      <br></br>
      <div className="animation">
        <h1>Menu</h1>
        <div >
        <NavLink to="/AddItem">
          <button className="btn btn-success btn-lg">Add new Item</button>
        </NavLink>
        </div>
      
        <MenuItemBox key={a++} rsname={props.rsname} state={setState}/>
      </div>
    </>
  );
};

export default ManageMenu;
