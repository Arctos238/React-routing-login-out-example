import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import LoginPage from "./Components/LoginPage/LoginPage";
import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const changeLogin = () => {
    setLoggedIn(loggedIn ? false : true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LoginPage changeLoginHandler={changeLogin} />}
        />
        if(loggedIn)
        {
          <Route
            path="/home"
            element={
              <Home userLoggedIn={loggedIn} changeLoginHandler={changeLogin} />
            }
          />
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
