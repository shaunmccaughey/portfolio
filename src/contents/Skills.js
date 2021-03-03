import HTML from "../img/HTML.webp";
import CSS from "../img/CSS.webp";
import JS from "../img/js.png";
import React from "../img/react.jpeg";
import Wordpress from "../img/wordpress.png";
import { motion } from "framer-motion";

export default function skills() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="content skills"
    >
      <h1>My Skills</h1>
      <div className="qualifications">
        <img src={HTML} alt="" />
        <img src={CSS} alt="" />
        <img src={JS} alt="" />
        <img src={Wordpress} alt="" />
        <img src={React} alt="" />
      </div>
    </motion.div>
  );
}
