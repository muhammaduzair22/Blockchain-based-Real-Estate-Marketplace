import { useState, useEffect } from "react";
import Menuitem from "../components/menuitems";
import axios from "axios";
import "./menuitemsc.css";
import SearchBar from "../components/filter";
import { NavLink, useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

function Menuitemsc() {

    const name = window.location.href.split('/').pop();

    const [listOfrestaurantsmenuitems, setListOfrestaurantsmenuitems] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/api/real-estate/getAllRealEstates").then((response) => {
            setListOfrestaurantsmenuitems(response.data);
        })
    }, [])
    // var temp = listOfrestaurantsmenuitems.filter(check);
    var temp = listOfrestaurantsmenuitems;

    console.log(temp);

    // const [array, setarray] = useState([]);
    var array = [];
    return (

        <div data-testid="menuitemsc">
            <br />
            {/* <SearchBar placeholder="Enter item name.." data={temp} /> */}
            {/* <div className="dashboard-item"></div> */}
            {/* <SearchBar /> */}

            <div className="flex-container">
                {Searchbar()}
                <SearchIcon className="searchIcon" />

            </div>

            <div className="row">
                {array.map(menuitem => {
                    return <div className="col-md-4 p-3">
                        <div className="m-5 shadow-lg p-3 mb-5 bg-white rounded">
                            <div>
                                <Menuitem menuitem={menuitem} />
                            </div>
                        </div>
                    </div>
                })}
            </div>

        </div>
    );
    function check(listOfrestaurantsmenuitems) {
        console.log(listOfrestaurantsmenuitems);
        return listOfrestaurantsmenuitems.restaurantName === name;
    }
    function Searchbar() {
        const [query, setQuery] = useState("")
        return (
            <div className="search">

                <input placeholder="Enter Item.." onChange={event => setQuery(event.target.value)} />
                {
                    temp.filter(post => {
                        if (query === '') {
                            // array.length = 0;
                            array.push(post);
                            console.log(array);
                            // return post;
                        }

                        else if (post.itemName.toLowerCase().includes(query.toLowerCase())) {
                            array.push(post);
                            console.log(array);
                            // return post;
                        }
                    })
                    //     .map((post, index) => (
                    //     <div className="box" key={index}>
                    //         <p>{post.itemName}</p>
                    //     </div>   
                    // ))
                }


            </div >
        )
    }

};
export default Menuitemsc;
