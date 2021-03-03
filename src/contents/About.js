import pf from "../img/about.jpg";
import { motion } from "framer-motion";

export default function about() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="content about"
    >
      <div className="profilePicture">
        <img src={pf} alt="" />
      </div>
      <div className="aboutContent">
        <h1>About Me</h1>
        <br />
        <h3>Hi,</h3>
        <h3>
          My Name Is <h2>Shaun</h2>
        </h3>
        <h3>, React Developer</h3>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          facere, nulla saepe ipsam reprehenderit autem rerum recusandae
          nesciunt error suscipit velit ipsum voluptas tenetur! Culpa non unde a
          maiores maxime magni cupiditate debitis ex blanditiis modi tenetur
        </p>
      </div>
    </motion.div>
  );
}
