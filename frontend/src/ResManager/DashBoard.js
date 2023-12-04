import React from "react";
import "./DashBoard.css";
import ManageMenu from "./ManageMenu";
import Switch from "./Switch";
import DashBoardItem from "./DashBoardItem";
import { useNavigate } from "react-router-dom";
const Dashboard = (props) => {
  let navigate = useNavigate();
  const ManageMenu = () => {
    navigate("/manageMenu");
  };
  const click = () => { };

  return (
    <div data-testid="comp">

      {/* <link
       href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        rel="stylesheet"
      /> */}
      { //props.rsname!=="NOTLOGINEDIN"?
        <div className="dashboard">
          <div className="card-header">
            <h1>{props.rsname}</h1>
          </div>
          <br />
          <Switch />
          <br />
          <div className="container">
            <div className="row align-items-center">
              <DashBoardItem
                name="Manage Property"
                link="/manageMenu"
                src="https://img.icons8.com/color/344/purchase-order.png"
              />
              {/* <DashBoardItem
                name="Orders"
                link="/orders"
                src="https://img.icons8.com/color/344/purchase-order.png"
              />
              <DashBoardItem
                name="Request Rider"
                link="/rider"
                src="https://img.icons8.com/color/344/motorcycle-delivery-multiple-boxes.png"
              /> */}
            </div>
          </div>
        </div>
        // :<h1>LOGIN FIRST</h1>
      }
    </div>
  );
};

export default Dashboard;
