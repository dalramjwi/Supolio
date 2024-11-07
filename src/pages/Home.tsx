import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <Link to="/main">Read ME</Link>
      <Link to="/info">Info</Link>
      <Link to="/project">Projects</Link>
    </>
  );
};

export default Home;
