import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () =>{
  const {auth} = useSelector((state)=>({...state}));
    return (
        <div className="container-fluid p-5">
            <div className="container">
            <div className="card py-4 px-4">
              Dashboard
              <div class="alert alert-primary" role="alert">
                Hello {auth.user.name}
              </div> 
            </div>
            </div>
        </div>
      );
}

export default Dashboard;