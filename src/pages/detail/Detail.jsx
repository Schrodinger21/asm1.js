import React from "react";
// import Footer from "../../components/Footer/Footer";
// import HotelDetail from "../../components/HotelDetail/HotelDetail";
// import MailList from "../../components/MailList/MailList";
// import Navbar from "../../components/NavBar/NavBar";
// import NavBarItem from "../../components/NavBarItem/NavBarItem";

import Footer from "../../components/Homepage/Footer/Footer";
import HotelDetail from "../../components/Homepage/Hotel/HotelDetail";
import Form from "../../components/Homepage/Form/Form";
import Navbar from "../../components/Nav/Navbar/NavBar";
import NavBarItem from "../../components/Nav/NavBarItem/NavBarItem";

const Detail = () => {
  return (
    <div>
      <div>
        <Navbar />
        <NavBarItem />
        <HotelDetail />
        <Form />
        <div className="homeContainer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Detail;
