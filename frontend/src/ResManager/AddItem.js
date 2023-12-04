import ModalOverlay from "./ModalOverlay.js"
import "./ManageMenu.css";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import axios from "axios";

const AddItem = (props) => {

  const [img, setimg] = useState("");
  const [iname, setiname] = useState("");
  const [iprice, setiprice] = useState("");
  const [idec, setidec] = useState("");
  const [resname, setresname] = useState(props.rsname);
  const imgLink = (event) => {
    console.log(event.target.value);
    setimg(event.target.value);
  }
  let navigate = useNavigate();
  const SubmitHandler = (event) => {
    event.preventDefault();

    console.log(props.rsname)
    window.alert("Success!")
    axios.post("http://localhost:3001/postItem", {
      itemDescription: idec,
      itemImg: img,
      itemName: iname,
      itemPrice: iprice,
      restaurantName: resname
    }).then((response) => { console.log(response) });
    //connect to db and save data
    navigate("/manageMenu");
  }

  return (
    <ModalOverlay popup="true">
      {/* <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet"/> */}
      <div>
        <h3>Add New Item</h3>
        <NavLink to="/manageMenu">
          <img src="https://img.icons8.com/color/344/cancel--v1.png" width="40px" height="40px" className="cancel" />
        </NavLink>
      </div>

      <hr></hr>
      <form >
        <div className="form-group">
          <label className="label">Item Name</label>
          <input type="text" className="form-control" onChange={(event) => { setiname(event.target.value) }} />
        </div>
        <div className="form-group">
          <label className="label">Item Price</label>
          <input type="text" className="form-control" onChange={(event) => { setiprice(event.target.value) }} />
        </div>
        <div className="form-group">
          <label className="label">Item Description</label>
          <input type="text" className="form-control" onChange={(event) => { setidec(event.target.value) }} />
        </div>
        <div className="form-group">
          <label className="label">Item Image</label>
          <input type="text" className="form-control" onChange={imgLink} />
        </div>
        <div className="form-group">
          <img src={img} width="200px" height="200px"></img></div>

        <span><button type="submit" className="btn btn-primary" onClick={SubmitHandler} href="/resturant"> Submit</button> </span>

      </form>
    </ModalOverlay>

  );
}

export default AddItem;
