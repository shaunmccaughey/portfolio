import React from "react";
import dp from "../img/profilePicture.jpg";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="content home"
    >
      <div className="banner">
        <img src={dp} alt="" />

        <div className="homeWrapper">
          <p></p>
          <h7>Web Designer</h7>
          <p></p>
        </div>

        <h1 className="name">Shaun Mccaughey</h1>
      </div>
    </motion.div>
  );
}
export default Home;
