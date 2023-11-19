import React from "react";
import {NavLink} from 'react-router-dom';

const DashboardNav = () => {
  return (
    <ul className='nav nav-tabs'>
      <li className='nav-items'>
        <NavLink className="nav-link" to="/dashboard" exact activeClassName="active">Your Booking</NavLink>
      </li>
      <li className='nav-items'>
        <NavLink className="nav-link" to="/dashboard/merchant" exact activeClassName="active">Your Hotels</NavLink>
      </li>
    </ul>
  )
}

export default DashboardNav;
