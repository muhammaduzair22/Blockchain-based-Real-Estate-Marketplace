import { useState, useEffect } from "react";
import Resturants from "../components/Resturants";
import axios from "axios";
import "./Home.css";
import Filter from "../components/filter";
import { NavLink } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

function Home() {
  const [listOfrestaurants, setListOfrestaurants] = useState([]);
  // var temp = listOfrestaurants;

  // console.log(temp);

  // // const [array, setarray] = useState([]);
  // var array = [];
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
      {/* <br />
      {/* <SearchBar placeholder="Enter item name.." data={temp} /> */}
      {/* <div className="dashboard-item"></div> */}
      {/* <SearchBar /> */}
      {/* 
      <div className="flex-container">
        {Searchbar()}
        <SearchIcon className="searchIcon" />

      </div>
      <br></br>  */}
      {/* <div className="dashboard-item"></div> */}
      <Filter onFilterValueSelected={onFilterValueSelected} />
      <div className="row">
        {filteredProductList.map((resturant) => {
          return (
            <div className="col-md-4 p-3">
              {/* <NavLink to={`/menuitemsc/${resturant.title}`}> */}
              <div className="m-5 shadow-lg p-3 mb-5 bg-white rounded">
                <div className="">
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
  //  function Searchbar() {
  //     const [query, setQuery] = useState("")
  //     return (
  //       <div className="search">

  //         <input placeholder="Enter Item.." onChange={event => setQuery(event.target.value)} />
  //         {
  //           temp.filter(post => {
  //             if (query === '') {
  //               // array.length = 0;
  //               array.push(post);
  //               console.log(array);
  //               // return post;
  //             }

  //             else if (post.title.toLowerCase().includes(query.toLowerCase())) {
  //               array.push(post);
  //               console.log(array);
  //               // return post;
  //             }
  //           })
  //           //     .map((post, index) => (
  //           //     <div className="box" key={index}>
  //           //         <p>{post.itemName}</p>
  //           //     </div>   
  //           // ))
  //         }


  //       </div >
  //     )
  //   }
}

export default Home;
