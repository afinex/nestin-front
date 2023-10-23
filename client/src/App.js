import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthRoute from "./middleware/authRoute";

import Home from './resources/js/Pages/Booking/Home'
import Register from './resources/js/Pages/Auth/Register'
import Login from './resources/js/Pages/Auth/Login'
import Dashboard from './resources/js/Pages/Auth/Dashboard'

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
    </Switch>
    </BrowserRouter>
  );
}

export default App;
