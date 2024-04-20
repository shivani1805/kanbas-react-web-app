import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
export default function Signup() {
  const [error, setError] = useState("");
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(user);
      navigate("/Kanbas/Account/Profile");
    } catch (err:any) {
      setError(err.response.data.message);
    }
  };
  return (
    <div>
      <h1 style={{"paddingLeft":"16em"}}>Signup</h1>
      {error && <div>{error}</div>}
      <input style={{"marginLeft":"39em"}} value={user.username} onChange={(e) => setUser({
          ...user, username: e.target.value })} /><br/>
      <input style={{"marginLeft":"39em"}} value={user.password} onChange={(e) => setUser({
          ...user, password: e.target.value })} /> <br/><br/>
      <button   className="btn btn-success" style={{"marginLeft":"42em"}}  onClick={signup}> Signup </button>
    </div>
  );
}

