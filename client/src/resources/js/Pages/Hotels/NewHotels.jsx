import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

import axios from "axios";
import {Link} from "react-router-dom";

import {HomeOutlined, LoadingOutlined} from '@ant-design/icons';
import {toast} from 'react-toastify';


const NewHotels = () =>{
    const {auth} = useSelector((state)=> ({...state}));
    const {user} = auth;
    const [loading, setLoading] = useState(false);

    const handleClick = async() => {
        setLoading(true);

        try {
            const res = await axios.post(`${process.env.REACT_APP_SERVER_API}/create-connect-account`,
            {},
            {
                headers: {
                     Authorization: `Bearer ${auth.token}`,
                    }
            });
            
            setLoading(false);
            console.log(res);

        } catch (error) {
            toast.error(`Failed to connect server.`);
            setLoading(false);

        }
        

    }

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
                <button onClick={handleClick} disabled={loading} className="btn btn-primary mb-3">
                    {loading ? <div><LoadingOutlined /><span className="mx-2">Processing</span></div> : "Setup Payout"}
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
            <div className="container-fluid p-5 h1 text-center">New Hotels</div>
            {user && user.stripe_seller && user.charges_enabled ? connected() : notConnected()}
            <pre>{JSON.stringify(auth,null,4)}</pre>
        </div>
    )
}

export default NewHotels;