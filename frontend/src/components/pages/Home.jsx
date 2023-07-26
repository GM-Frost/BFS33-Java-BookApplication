import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const username = queryParams.get("username");

  return (
    <>
      <h1>Home</h1>
      {username && <p>Welcome,{username}</p>}
    </>
  );
};

export default Home;
