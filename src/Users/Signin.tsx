import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";
export default function Signin() {
  const [credentials, setCredentials] = useState<User>({ _id: "",
    username: "", password: "", firstName: "", lastName: "", role: "USER"
  });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/Kanbas/Account/Profile");
  };
  const signup = async () => {
    // await client.signup(credentials);
    navigate("/Kanbas/Account/Signup");
  };
  return (
    <div>
      <h1 style={{"paddingLeft":"16em"}}>Signin</h1>
      <input className="form-control-lg"  style={{"marginLeft":"28em"}} value={credentials.username} onChange={(e) =>
        setCredentials({ ...credentials, username: e.target.value })}/><br/>
      <input className="form-control-lg" style={{"marginLeft":"28em"}} value={credentials.password} onChange={(e) =>
        setCredentials({ ...credentials, password: e.target.value })}/><br/><br/>
        <div className="d-flex">
      <button className="btn btn-primary" style={{"marginLeft":"38em"}} onClick={signin}> Signin </button>
      <button className="btn btn-success" style={{"marginLeft":"1em"}} onClick={signup}> Signup </button>
      </div>
    </div>
  );
}

