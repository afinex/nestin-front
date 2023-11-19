import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthRoute from "./routing/authRoute";

import Home from './resources/js/Pages/Booking/Home'
import Register from './resources/js/Pages/Auth/Register'
import Login from './resources/js/Pages/Auth/Login'
import Dashboard from './resources/js/Pages/Auth/Dashboard'
import DashboardMerchant from './resources/js/Pages/Auth/DashboardMerchant'

import Bookings from './resources/js/Pages/Auth/Bookings'

import NewHotels from './resources/js/Pages/Hotels/NewHotels'

import TopNav from "./resources/js/Components/TopNav";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <BrowserRouter>
    <TopNav/>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover={false}
      theme="dark"
      />
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/register" component={Register}></Route>

      <AuthRoute exact path="/dashboard" component={Dashboard}></AuthRoute>
      <AuthRoute exact path="/dashboard/merchant" component={DashboardMerchant}></AuthRoute>

      <AuthRoute exact path="/hotels/new" component={NewHotels}></AuthRoute>

      <AuthRoute exact path="/dashboard/bookings" component={Bookings}></AuthRoute>
      <AuthRoute exact path="/dashboard/hotels" component={NewHotels}></AuthRoute>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
