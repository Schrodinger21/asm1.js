import React from "react";
import Footer from "../../components/Homepage/Footer/Footer";
import Navbar from "../../components/Nav/Navbar/NavBar";
import NavBarItem from "../../components/Nav/NavBarItem/NavBarItem";
import SearchPopup from "../../components/Homepage/Search/SearchPopup";

const Search = () => {
  return (
    <div>
      <Navbar />
      <NavBarItem />
      <SearchPopup />
      <div className="homeContainer">
        <Footer />
      </div>
    </div>
  );
};

export default Search;
