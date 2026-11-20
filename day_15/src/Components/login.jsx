import { useState } from 'react'
import { useNavigate } from "react-router-dom";
const Login = ({user}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const loginHandler = () => {
        if(email === "" || password === "") {
            alert("Please fill all the fields");
            return;
        }
        else{
            if(user.email === email && user.password === password) {
                alert("Login Successful");
                navigate("/dashboard");
            }
            else{
                alert("User is not existing");
            }

        }
        console.log(email, password);
    };
  return (
    <div>
        <h1>Login page</h1>
        <input type ='email' placeholder='Enter your Email' 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}></input>
        <br></br>
        <input type='password' placeholder='Enter your Password' 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}></input>
        <br></br>
        <button onClick={loginHandler}>LOGIN</button>
    </div>
  )
}

export default Login