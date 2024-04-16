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
  return (
    <div>
      <h1 style={{"paddingLeft":"15em"}}>Signin</h1>
      <input className="form-control-lg"  style={{"marginLeft":"28em"}} value={credentials.username} onChange={(e) =>
        setCredentials({ ...credentials, username: e.target.value })}/><br/>
      <input className="form-control-lg" style={{"marginLeft":"28em"}} value={credentials.password} onChange={(e) =>
        setCredentials({ ...credentials, password: e.target.value })}/><br/>
      <button className="btn btn-primary" style={{"marginLeft":"40em"}} onClick={signin}> Signin </button>
    </div>
  );
}

