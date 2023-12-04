import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"

import axios from "axios";

const LoginPage = (props) => {
  let navigate = useNavigate();
  // const [loginResName, setloginResName] = useState("false");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const usernameHandeler = (event) => {
    setUserName(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  async function loginHandler() {
    let doc = '';
    if (userName.length <= 0 || password.length <= 0) {
      window.alert("Invalid Input")
      return false;
    }
    // await axios
    //   .post("http://localhost:3001/Login", {
    //     restaurantuserName: userName,
    //     restaurantPassword: password,
    //   })
    //   .then(async (response) => {
    //     doc = response.data;
    //   });
    console.log(doc);
    if (doc.length == 0) {
      localStorage.setItem("IsLogedin", "TRUE");
      // console.log(doc[0].restaurantName);
      // props.onLogin(doc[0].restaurantName);
      navigate("/restuarant");
    }
    else {
      console.log("not found");
      window.alert("Invalid Credentials")
    }

  }

  const admin = () => {
    console.log("Admin");
  };

  return (

    <div data-testid="comp">
      <div className="box-form">
        <div className="left" ></div>
        <div className="right">
          <h1>Login</h1>
          <h2>Property Owner</h2>
          <br></br>
          <br></br>
          <div className="inputs">
            <h2>Username</h2>
            <br />
            <input
              type="text"
              placeholder="Username"
              onChange={usernameHandeler}
            ></input>
            <br />
            <br />
            <h2>Password</h2>
            <br />
            <input
              type="password"
              placeholder="password"
              onChange={passwordHandler}
            ></input>
          </div>
          <br />
          Don't have an account?
          <br />
          <a href="/admin">
            Contact Admin
            <span className="link" onClick={admin}>
              here!
            </span>
          </a>
          <br />
          <br />
          <br />
          <button className="button-34" onClick={loginHandler}>
            Submit
          </button>
        </div>
      </div>
    </div>

  );
};

export default LoginPage;
