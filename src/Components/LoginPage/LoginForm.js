import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = (props) => {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  const handleSubmit = () => {
    fetch("http://localhost:8080/api/employees/" + username)
      .then((response) => response.json())
      .then((data) => setUserData(data));

    if (
      userData.employeePassword === password &&
      username === userData.employeeUsername
    ) {
      setUser(user);
      localStorage.setItem("user", user);
      props.changeLoginHandler();

      navigate("/home");
    }

    setUsername("");
    setPassword("");
  };

  const inputHandler = (event) => {
    if (event.target.name === "formUsername") {
      setUsername(event.target.value);
    } else if (event.target.name === "formPassword") {
      setPassword(event.target.value);
    }
  };

  return (
    <div>
      <label>Username:</label>
      <input
        type="text"
        name="formUsername"
        onChange={inputHandler}
        value={username}
      ></input>
      <br></br>
      <label>Password:</label>
      <input
        type="text"
        name="formPassword"
        onChange={inputHandler}
        value={password}
      ></input>
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default LoginForm;
