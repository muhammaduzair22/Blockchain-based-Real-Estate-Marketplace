import { useState, useEffect } from "react";
import Resturants from "../components/Resturants";
import axios from "axios";
import "./Home.css";
import Filter from "../components/filter";
import { NavLink } from "react-router-dom";

function Home() {
  const [listOfrestaurants, setListOfrestaurants] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/real-estate/getAllRealEstates").then((response) => {
      setListOfrestaurants(response.data);
    });
  }, []);

  let [filterTextValue, updateFilterText] = useState("all");

  let filteredProductList = listOfrestaurants.filter((product) => {
    if (filterTextValue === "Bungalow") {
      return product.title === "Bungalow";
    } else if (filterTextValue === "Apartment") {
      return product.title === "Apartment";
    } else if (filterTextValue === "House") {
      return product.title === "House";
    } else if (filterTextValue === "Plaza") {
      return product.title === "Plaza";
    }
    else {
      return product;
    }
  });
  return (
    <div data-testid="home">
      <br></br>
      {/* <div className="dashboard-item"></div> */}
      <Filter onFilterValueSelected={onFilterValueSelected} />
      <div className="row">
        {filteredProductList.map((resturant) => {
          return (
            <div className="col-md-4 p-3">
              {/* <NavLink to={`/menuitemsc/${resturant.title}`}> */}
              <div className="m-5 shadow-lg p-3 mb-5 bg-white rounded">
                <div className="zoom">
                  <Resturants resturant={resturant} />
                </div>
              </div>
              {/* </NavLink> */}
            </div>
          );
        })}
      </div>
    </div >
  );
  function onFilterValueSelected(filtervalue) {
    updateFilterText(filtervalue);
  }
}

export default Home;
