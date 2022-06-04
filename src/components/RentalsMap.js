import React from "react";
import { Map,Marker,GoogleApiWrapper } from "google-maps-react";
import {useState,useEffect} from "react"
function RentalsMap({locations}) {
    
    const[center,setCenter] = useState();
   //whenever the locations will get changed we will run this use Effect sstate
   useEffect(()=>{

         //helps you get avg latitude and longitude
          let arr =Object.keys(locations);
          console.log(arr);
          let getLat = (key)=>locations[key]["lat"]; //since we have stored an array of objects with each object contaning latitude and longitude we are here acessing specfic object with specfic latitude
          let avgLat = arr.reduce((a,c)=>a+Number(getLat(c)),0)/arr.length

          let getLng = (key)=>locations[key]["lng"];
          let avgLng = arr.reduce((a, c) => a + Number(getLng(c)), 0) / arr.length;
   },[locations])
  return (
    <>
      <div>Map</div>
    </>
  );
}

export default GoogleApiWrapper({
  apiKey:""
})(RentalsMap);
