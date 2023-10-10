import { useState } from "react";
import axios from "axios";
import RegisterForm from "../../Components/RegisterForm";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post(`http://localhost:8001/api/register`, {
            name:name,
            email:email,
            password:password,
        });

        // console.log("Registered User ===>",res);
        console.log(res);
    } catch (error) {
        console.error(error);
    }
  };

  return (
    <div className="container-fluid p-5">
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
  );
};

export default Register;
