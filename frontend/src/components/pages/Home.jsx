import React from "react";
import { useParams } from "react-router-dom";

const Home = () => {
  const { username } = useParams();

  return (
    <>
      <h1>Welcome </h1>
      <span>{username}</span>
      {/* Additional content for the Home page */}
    </>
  );
};

export default Home;
