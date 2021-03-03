import Social from "../Common/social";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="content contact"
    >
      <h1>Contact Me</h1>
      <p></p>
      <div className="contactMe">
        <form action="">
          <input type="text" placeholder="Enter Name" />

          <input type="text" placeholder="Enter Email" />

          <textarea
            name=""
            id=""
            placeholder="Message"
            cols="30"
            rows="10"
          ></textarea>
          <button>Submit</button>
        </form>
        <Social />
      </div>
    </motion.div>
  );
}
