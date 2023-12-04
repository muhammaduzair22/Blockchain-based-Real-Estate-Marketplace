import { useState, useEffect } from "react";
import MenuItem from "./MenuItem.js"
import axios from "axios";
import "./ManageMenu.css";
const MenuItemBox = (props) => {
  const [menuItems, setmenuItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/real-estate/getAllRealEstates").then((response) => {
      setmenuItems(response.data);

    })
  }, [])
  const temp = menuItems.filter((el) => { if (el.restaurantName === props.rsname) return true })

  return (
    <div>
      {temp.length > 0 ? <div className="row">
        {temp.map((mi) => {
          return (
            <div className="col-md-4 p-3">
              <div className="m-5 shadow-lg p-3 mb-5 bg-white rounded">
                <div>
                  <MenuItem key={mi._id} item={mi} state={props.state} />
                </div>
              </div>
            </div>
          );
        })}
      </div> : <h1>NO ITEM</h1>
      }

    </div>
  );
};
export default MenuItemBox;
