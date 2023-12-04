import React from 'react';
import "./DashBoard.css"
import { NavLink } from "react-router-dom";
const DashBoardItem=(props)=>{
     return (
       
        <div className="col-md-4">
             <NavLink to={props.link}>
        <div className="dashboard-item" >
            <img src={props.src} width='200px' height='200px' alt="logo" />
            <h2>{props.name}</h2>
        </div>
        </NavLink>
    </div>
    
       
     )
}
export default DashBoardItem