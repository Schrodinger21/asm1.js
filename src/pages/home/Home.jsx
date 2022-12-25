import React from "react";
import Navbar from "../../components/Nav/Navbar/NavBar";
import NavBarItem from "../../components/Nav/NavBarItem/NavBarItem";
import Header from "../../components/Homepage/Header/Header";
import "./Home.css";

import Form from "../../components/Homepage/Form/Form";
import Footer from "../../components/Homepage/Footer/Footer";
import City from "../../components/Homepage/City/City";
import Type from "../../components/Homepage/Type/Type";
import HotelList from "../../components/Homepage/Hotel/HotelList";
import Card from "../../components/Homepage/UI/Card";
import { dataCity } from "../../components/Homepage/City/CityData";
import { typeData } from "../../components/Homepage/Type/TypeData";
import { hotelListData } from "../../components/Homepage/Hotel/HotelListData";

const Home = () => {
  return (
    <div>
      <Navbar />

      <NavBarItem />
      <Header />
      <div className="homeContainer">
        <Card>
          {dataCity.map((item) => (
            <City image={item.image} name={item.name} subText={item.subText} />
          ))}
        </Card>
        <h1 className="homeTitle">Browse by property type</h1>
        <Card>
          {typeData.map((item) => (
            <Type image={item.image} name={item.name} count={item.count} />
          ))}
        </Card>

        <h1 className="homeTitle">Homes guests love</h1>
        <Card className="hotelList">
          {hotelListData.map((item) => (
            <HotelList
              image={item.image_url}
              name={item.name}
              price={item.price}
              city={item.city}
              rate={item.rate}
              type={item.type}
            />
          ))}
        </Card>
        <Form />

        <Footer />
      </div>
    </div>
  );
};

export default Home;
