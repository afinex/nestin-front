import React from "react";
import { useSelector } from "react-redux";

const Hotels = () =>{
  const {auth} = useSelector((state)=>({...state}));
    return (
        <div className="container-fluid p-5">
            <div className="container">
            <div className="card py-4 px-4">
              Hotels
            </div>
            </div>
        </div>
      );
}

export default Hotels;