import WideCard from "../Common/WideCard";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import { motion } from "framer-motion";

export default function Project() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="content project"
    >
      <h1>My Projects</h1>
      <div className="projectIdeas">
        <img src={img1} alt="" />
        <img className="img2" src={img2} alt="" />
        <img src={img3} alt="" />
        <br />
      </div>
    </motion.div>
  );
}
