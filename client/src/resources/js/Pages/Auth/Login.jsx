import { useState } from "react";
import axios from "axios";
import LoginForm from "../../Components/LoginForm";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

const Login = ({history}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post(`${process.env.REACT_APP_SERVER_API}/login`, {
            email:email,
            password:password,
        });

        if(res.status === 200){
          toast.success("Login Success!");
          
          window.localStorage.setItem("auth", JSON.stringify(res.data));
          dispatch({
            type : "LOGGED_IN_USER",
            action : res.data,
          });

          history.push("/dashboard");
         
        }

        console.log(res);
    } catch (error) {
        toast.error(error.response.data)

    }
  };

  return (
    <div className="container-fluid p-5">
       <div className="container">
        <div className="card py-4 px-4">
          <LoginForm
            handleSubmit={handleSubmit}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
        </div>
       </div>
    </div>
  );
};

export default Login;
