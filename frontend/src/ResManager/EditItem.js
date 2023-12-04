
import "./ManageMenu.css";
import React, { useState, useEffect } from "react";
import EditItemForm from "./EditItemForm.js";
import axios from "axios";
import Wrapper from "./Wrapper"
import MenuItem from "./MenuItem";


const EditItem = () => {
  const name = window.location.href.split("/").pop();
  console.log(name);
  const [menuItems, setmenuItems] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/Menu").then((response) => {
      setmenuItems(response.data);
    })
  }, [])
  console.log(menuItems);

  const filtred = menuItems.filter((MI) => { if (MI.itemName === name) return true });
  console.log(filtred);
  // console.log(menuItems);
  // console.log(filtred);
  //  let obj = 
  // {
  //   itemDescription: "abc",
  //   itemImg: "abv",
  //   itemName: "abv",
  //   itemPrice: "abv",
  // };

  return (
    <div>
      <h1>EDIT ITEM </h1>
      {menuItems.map((el) => { <EditItemForm item={el} /> })}
    </div>
  )
};

export default EditItem;
