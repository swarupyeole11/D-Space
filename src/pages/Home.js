// -->  every ../ takes you out of 1 directory at a time in hierrachy
// --> ./ takes you out of the curretn file
import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import bg from "../images/frontpagebg2.png";
import { ConnectButton, Select, DatePicker, Input,Icon,Button} from "web3uikit";
import { getAllByAltText } from "@testing-library/react";
import { useState } from "react";

const Home = () => {


 const [checkIn,setCheckIn] = useState(new Date());
 const [checkOut,setCheckOut] = useState(new Date());
 const [destination,setDestination] = useState("New York");
 const [guests,setGuests] = useState(2);


  return (
    <>
      <div className="container" style={{ backgroundImage: `url(${bg})` }}>
        <div className="containerGradient"></div>
      </div>

      <div className="topBanner">
        <div className="tabs">
          <div className="selected">Places To Stay</div>
          <div>Experiences</div>
          <div>Online Experiences</div>
        </div>

        <div className="lrContainers">
          <ConnectButton />
        </div>
      </div>

      <div className="tabContent">
        <div className="searchFields">
          <div className="inputs">
            Location
            <Select
              defaultOptionIndex={0}
              onChange={(data) => setDestination(data.label)}
              options={[
                {
                  id: "ny",
                  label: "New York",
                },

                {
                  id: "lon",
                  label: "London",
                },
                {
                  id: "dub",
                  label: "Dubai",
                },
                {
                  id: "la",
                  label: "Los Angeles",
                },
              ]}
            />
          </div>

          <div className="vl"></div>

          <div className="inputs">
            Check In
            <DatePicker
              id="date-picker"
              label=""
              onChange={(event) => setCheckIn(event.date)}
            />
          </div>

          <div className="vl"></div>

          <div className="inputs">
            Check Out
            <DatePicker
              id="date-picker"
              label=""
              onChange={(event) => setCheckOut(event.date)}
            />
          </div>

          <div className="vl"></div>

          <div className="inputs">
            Guests
            <Input
              value={2}
              name="Add Guest"
              type="number"
              onBlur={function noRefCheck() {}}
              onChange={(event) => {
                console.log(typeof event);
                return setGuests(Number(event.target));
              }} //here OnChange is an Event Just Like OnClick and then what willl happen when clicked on chnage is writeen in angular bracket in form of function NOTE: () is missing because wehn we pass a single parameter in arrow function there is no need for () , also Event here is an event object
            />
          </div>

          {/* /* //this Link tag has attribute (to) which ret=directs to different page and (state) tag which helps in passing the state variables  */}
          <Link
            to={"/rentals"}
            state={{
              /*The link tag creates a clickBLE LINK AROUND THE TEXT OR ICON*/
              destination: destination,
              checkIn: checkIn,
              checkOut: checkOut,
              guests: guests,    //  here the second word is the key word defined here an dthe first one is the name of the cvariable which we will be passing to other page for this variable for easiness we have kept them same
            }}
          >
            <div className="searchButton">
              <Icon fill="#ffffff" size={24} svg="search" />
            </div>

            
          </Link>
        </div>
      </div>
      
      <div className="randomLocation">
        <div className="title">Feel Adveturous</div>
        <div className="text">
          let us decide and discover new palce to stay,live,work and relax.
        </div>
          <Button 
             text="Explore A Location"
             onClick = {()=> console.log(checkOut)}
          />
      </div>
    </>
  );
};

export default Home;
