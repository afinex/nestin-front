import React from "react";
import { useSelector } from "react-redux";

const Bookings = () =>{
  const {auth} = useSelector((state)=>({...state}));
    return (
        <div className="container-fluid p-5">
            <div className="container">
            <div className="card py-4 px-4">
              Bookings
            </div>
            </div>
        </div>
      );
}

export default Bookings;