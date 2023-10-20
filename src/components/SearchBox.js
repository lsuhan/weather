import React from "react";

function SearchBox({onClick, onChange, city}) {
    return (
        <div className="search-box">
            <i className="fa-solid fa-location-dot"></i>
            <input type="text" placeholder="Enter your location" onChange={onChange} value={city} />
            <button onClick={onClick} className="fa-solid fa-magnifying-glass"></button>
        </div>

    )
}

export default SearchBox;
