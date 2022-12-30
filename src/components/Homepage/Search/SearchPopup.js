import React from "react";
import "./SearchPopup.css";
import SearchList from "../Search/Search";
import { searchListData } from "../Search/SearchData";

const SearchPopup = () => {
  return (
    <div className="listContainer">
      <div className="listWrapper">
        <div className="listSearch">
          <h1 className="lsTitle">Search</h1>
          <div className="lsItem">
            <label>Destination</label>
            <input placeholder="" type="text" />
          </div>
          <div className="lsItem">
            <label>Check-in Date</label>
            <span>dd/mm/yyyy</span>
          </div>
          <div className="lsItem">
            <label>Options</label>
            <div className="lsOptions">
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Min price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Max price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Adult</span>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput"
                  placeholder=""
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Children</span>
                <input
                  type="number"
                  min={0}
                  className="lsOptionInput"
                  placeholder=""
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Room</span>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput"
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <button>Search</button>
        </div>
        <div className="listResult">
          {searchListData.map((item, i) => (
            <SearchList
              image={item.image_url}
              name={item.name}
              price={item.price}
              rate={item.rate}
              type={item.type}
              distance={item.distance}
              description={item.description}
              tag={item.tag}
              free_cancel={item.free_cancel}
              rate_text={item.rate_text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;
