import React from "react";
import { Link, link } from "react-router-dom";
import "./HotelList.css";

// Render hotels list.
const HotelList = (props) => {
  return (
    <div className="hotelList">
      <div className="hotelListItem">
        <img src={props.image} alt="" className="hotelListImg" />
        <Link to="/detail" className="hotelName">
          {props.name}
        </Link>
        <span className="hotelCity">{props.city} </span>
        <span className="hotelPrice">Starting from ${props.price} </span>
        <div className="hotelRating">
          <div>{props.rate} </div>
          <span>{props.type}</span>
        </div>
      </div>
    </div>
  );
};

export default HotelList;
