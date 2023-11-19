import React from "react";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';

import DashboardNav from "../../Components/DashboardNav";
import ConnectNav from '../../Components/ConnectNav'; 

import {HomeOutlined} from '@ant-design/icons';


const DashboardMerchant = () =>{
  const {auth} = useSelector((state)=>({...state}));
  const {user} = auth;

  const connected = () =>{
    return(
        <div className="container-fluid">
        <div className="row">
        <div className="col-md-10">
            <h2>Your Hotels</h2>
        </div>
        <div className="col-md-2">
            <Link  to="/hotels/new" className="btn btn-primary">
            + Add Hotels
            </Link>
        </div>
        </div>
    </div>
    
    )}
      
    const notConnected = () =>{
        return(
        <div className="container-fluid">
        <div className="row">
        <div className="col-md-6 offset-md-3 text-center">
            <div className="p-5 pointer">
                <HomeOutlined className="h1"/>
                <h2>Setup Payout to Post Hotels Room</h2>
                <p className="lead">MERN partner with stripe to transfer earnings to your bank account.</p>
                <button className="btn btn-primary mb-3">
                    Setup Payouts
                </button>
                <p className="text-muted">
                    <small>You'll be redirected to Stripe to complete the onboarding process.</small>
                </p>
            </div>
        </div>
        </div>
    
        </div>  
    )}
        
    return (
      <div>
        <div className="container-fluid bg-secondary p-5">
          <ConnectNav/>
        </div>
        <div className="container-fluid">
          <DashboardNav/>
        </div>
        <div>
            <div className="container-fluid p-5 h1 text-center">New Hotels</div>
            {user && user.stripe_seller && user.charges_enabled ? connected() : notConnected()}
            <pre>{JSON.stringify(auth,null,4)}</pre>
        </div>

      </div>
      );
}

export default DashboardMerchant;