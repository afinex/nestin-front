import React from "react";
import { useSelector } from "react-redux";
import DashboardNav from "../../Components/DashboardNav";
import ConnectNav from '../../Components/ConnectNav'; 
import {Link} from 'react-router-dom';

const Dashboard = () =>{
  const {auth} = useSelector((state)=>({...state}));
    return (
      <div>
        <div className="container-fluid bg-secondary p-5">
          <ConnectNav/>
        </div>
        <div className="container-fluid">
          <DashboardNav/>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10">
              <h2>Your Booking</h2>
            </div>
            <div className="col-md-2">
              <Link  to="/" className="btn btn-primary">
                Browse Hotels
              </Link>
            </div>
          </div>
        </div>

      </div>
      );
}

export default Dashboard;