import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    props.changeLoginHandler();
  };

  useEffect(() => {
    if (!props.userLoggedIn) {
      navigate("/");
    }
    return () => {};
  }, [props.userLoggedIn]);

  return (
    <>
      <div>Home</div>
      <button onClick={logoutHandler}>Logout</button>
    </>
  );
};

export default Home;
