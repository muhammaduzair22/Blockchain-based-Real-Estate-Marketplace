import ModalOverlay from "./ModalOverlay.js";
import "./ManageMenu.css";
import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const EditItemForm = (props) => {
  let navigate = useNavigate();
  const itemID = props.item.item._id;
  const [img, setimg] = useState(props.item.item.itemImg);
  const [iname, setiname] = useState(props.item.item.itemName);
  const [iprice, setiprice] = useState(props.item.item.itemPrice);
  const [idec, setidec] = useState(props.item.item.itemDescription);
  const [resname, setresname] = useState(props.item.item.restaurantName);

  const imgLink = (event) => {
    console.log(event.target.value);
    setimg(event.target.value);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    console.log(`id: ${itemID}`)
    setresname(resname);
    axios.put(`http://localhost:3001/editGSitem/${itemID}`, {
      itemDescription: idec,
      itemImg: img,
      itemName: iname,
      itemPrice: iprice,
      restaurantName: resname
    }).then((Response) => { window.alert("Edit Success full") }).catch(err => { window.alert("edit failed") })
    props.state("true");
    navigate("/manageMenu");
    props.onCloseEdit();
    //connect to db and save data

  };

  return (
    <ModalOverlay popup="true">
      {/* <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        rel="stylesheet"
      /> */}
      <h3>Edit Item</h3>

      <img
        src="https://img.icons8.com/color/344/cancel--v1.png"
        width="40px"
        height="40px"
        className="cancel"
        onClick={props.onCloseEdit}
        alt="error"
      />

      <hr></hr>

      <form>
        <div className="form-group">
          <label className="label">Item Name</label>

          <input
            type="text"
            className="form-control"
            defaultValue={iname}
            onChange={(event) => {
              setiname(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label className="label">Item Price</label>
          <input
            type="text"
            className="form-control"
            defaultValue={iprice}
            onChange={(event) => {
              setiprice(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label className="label">Item Description</label>
          <input
            type="text"
            className="form-control"
            defaultValue={idec}
            onChange={(event) => {
              setidec(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label className="label">Item Image Link</label>
          <input
            type="text"
            className="form-control"
            onChange={imgLink}
            defaultValue={img}
          />
        </div>

        <div className="form-group">
          <img
            src={img}
            width="200px"
            height="200px"
            alt="enter link to view"
          ></img>
        </div>

        <span>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={SubmitHandler}
          >
            Submit
          </button>
        </span>
      </form>
    </ModalOverlay>
  );
};

export default EditItemForm;
