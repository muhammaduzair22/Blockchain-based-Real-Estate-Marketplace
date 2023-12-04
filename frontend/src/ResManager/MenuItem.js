import { useState } from "react";
import EditItemForm from "./EditItemForm";
import "./ManageMenu.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

const MenuItem = (props) => {
  const [edit, setEdit] = useState(false);

  const editItem = () => {
    setEdit(true);
  };
  const onCloseEdit = () => {
    setEdit(false);
  };
  const deleteHandler = () => {
    axios.delete(`http://localhost:3001/delete/${props.item._id}`).then((Response) => { window.alert("Delete Success full") }).catch(err => { window.alert("Delete failed") })
    props.state("delete")

  }
  return (
    <div data-testid="comp">
      <div >
        {edit ? <EditItemForm item={props} onCloseEdit={onCloseEdit} state={props.state} /> : <></>}

      </div>
      <h1>{props.item.itemName}</h1>
      <hr />
      <div>

        <img
          src={props.item.itemImg}
          className="img-fluid"
          style={{ height: "220px", width: "220px" }}
        />
      </div>

      <div>
        <hr />
        <p style={{ fontSize: "22px" }}>Price: Rs-{props.item.itemPrice}</p>
        <p style={{ fontSize: "20px" }}>Description: {props.item.itemDescription}</p>
      </div>
      <div>
        <span>
          <button className="btn btn-danger" onClick={deleteHandler}>Delete</button>
        </span>
        <span>
          {/* <NavLink to={`/EditItem/${props.item._id}`}>  */}
          <button className="btn btn-info" onClick={editItem}>
            Edit
          </button>
          {/* </NavLink> */}
        </span>
      </div>
    </div>
  );
};

export default MenuItem;
