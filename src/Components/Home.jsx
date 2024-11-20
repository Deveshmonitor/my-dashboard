// pages/Home.js
import React from "react";
import PieDount from "./PieDount";
import ColumnBar from "./ColumnBar";

const Home = () => {
  return (
    <div className="text-gray-700 scroll-smooth overflow-hidden  dark:text-gray-200">
      <p>Welcome to the Home Page!</p>
      <ColumnBar />
      <PieDount />
    </div>
  );
};

export default Home;
