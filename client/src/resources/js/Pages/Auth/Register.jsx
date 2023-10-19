import { useState } from "react";
import axios from "axios";
import RegisterForm from "../../Components/RegisterForm";
import { toast } from "react-toastify";

const Register = ({history}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post(`${process.env.REACT_APP_SERVER_API}/register`, {
            name:name,
            email:email,
            password:password,
        });

        if(res.status === 200){
          toast.success("Registered success! Please login")
          history.push('/login');
        }

        console.log(res);
    } catch (error) {
        // toast.error(error.response.data)

        console.error(error);
    }
  };

  return (
    <div className="container-fluid p-5">
       <div className="container">
        <div className="card py-4 px-4">
          <RegisterForm
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
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

export default Register;
