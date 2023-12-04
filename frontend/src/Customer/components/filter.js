import React, { useState, useEffect } from "react";
import './filter.css'



function Filter(props) {

    function onFilterValueChanged(event) {
        props.onFilterValueSelected(event.target.value);
    }
    return (
        <div data-testid="filter" className="filter-area">
            <select className="isAvailable" onChange={onFilterValueChanged}>
                <option value="all">All Property</option>
                <option value="Bungalow">Bungalow</option>
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                <option value="Plaza">Plaza</option>
            </select>
        </div>
    )
}

export default Filter;