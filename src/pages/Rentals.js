import React from "react";
import "./Rentals.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../images/airbnbRed.png"
import { Button, ConnectButton ,Icon } from "web3uikit";
import RentalsMap from "../components/RentalsMap";

const Rentals = () => {
  //  This hook returns the location object used by the react-router.
  // This object represents the current URL and is immutable.
  //Whenever the URL changes, the useLocation() hook returns a newly updated location object.
  // Some of its use includes extracting the query parameters from the URL and doing something depending on the query parameters.
  //The “search” property of the location object returns a string containing the query part of the URL.

  const { state: searchFilters } = useLocation();  // we have done destructuring hee and we will be refering state object which contains all the information which we passes using use state variable as searchFilter this is known as aliasing
  const rentalsList = [
    {
      attributes: {
        city: "New York",
        unoDescription: "3 Guests • 2 Beds • 2 Rooms",
        dosDescription: "Wifi • Kitchen • Living Area",
        imgUrl:
          "https://ipfs.moralis.io:2053/ipfs/QmS3gdXVcjM72JSGH82ZEvu4D7nS6sYhbi5YyCw8u8z4pE/media/3",
        lat: "40.716862",
        long: "-73.999005",
        name: "Apartment in China Town",
        pricePerDay: "3",

      },
    },
  ];

  let cords = []; //declaring an empty array
  //pushing object which contains latitudes and longitudes
  // (e) refers to each element in the array  here the array is an array of object -> object  FOR MORE INFO CHECK DOCUMENTATION USING CNTRL+CLICK

  rentalsList.forEach((e)=>{
    cords.push({lat: e.attributes.lat, lng : e.attributes.long})
  });
  
  // console.log(cords); 


  return (
    <>
      <div className="topBanner">
        <div>
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
        </div>

        <div className="searchReminder">
          <div className="filter">{searchFilters.destination}</div>
          <div className="vl" />
          <div className="filter">
            {/* USUALLY IF YOU JUST TYPE VARIABLE NAME INSIDE THE {} IT WILL SHOW OUTPUT CORRESPODING TO THAT VARIABLE BUT WHEN THERE ARE MULKTIPLE VARIABLES INVOLVED THEN USE `` (BACKTICKS) AND ${} TO GET OUTPUT OF JS VARIABLES */}
            {` 
                ${searchFilters.checkIn.toLocaleString("default", {
                  month: "short",
                })}
                ${searchFilters.checkIn.toLocaleString("default", {
                  day: "2-digit",
                })}
                -
                 ${searchFilters.checkOut.toLocaleString("default", {
                   month: "short",
                 })}
                ${searchFilters.checkOut.toLocaleString("default", {
                  day: "2-digit",
                })}
              `}
          </div>
          <div className="vl" />
          <div className="filter">{searchFilters.guests} Guest</div>

          <div className="searchFiltersIcon">
            <Icon fill="#ffffff" size={20} svg="search" />
          </div>
        </div>
        <div className="lrContainers"></div>
        <ConnectButton />
      </div>

      <br className="line" />
      <div className="rentalsContent">
        <div className="rentalsContentL">
          Stays Available For Your Destination
          {/* here the writing of rentalsList is to check if any rentalsList exiss if yes then we continue */}

          {/* DOUBT WHERE IS THIS JSX GETTING RENDERED ???? */}


          {rentalsList &&
            rentalsList.map((e) => {
              //here e is a parmeter which point to the object we are acessing
              return (
                <>
                  <hr className="line2" />
                  <div className="rentalDiv">
                    <img className="rentalImg" src="e.attributes.imgUrl" />
                    <div className="rentalInfo">
                      <div className="rentalTitle">{e.attributes.name}</div>
                      <div className="rentalDesc">
                        {e.attributes.unoDescription}
                      </div>
                      <div className="rentalDesc">
                        {e.attributes.dosDescription}
                      </div>
                      <div className="bottomButton">
                        <Button text="Stay Here" />
                      </div>

                      <div className="price">
                        <Icon fill="#000000" size={10} svg="matic" />{" "}
                        {e.attributes.pricePerDay} / Day
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
        <div className="rentalsContentR">
          <RentalsMap locations={cords}/> {/* PASSING IN THE LATITUDE AND LONGITUDE TO THE RENTALS MAP COMPONENT */}
        </div>
      </div>
    </>
  );
};

export default Rentals;
