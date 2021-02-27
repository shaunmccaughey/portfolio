import React from "react";
import dp from "../img/1200px-Tic_tac_toe.svg.png";
import ReactTypingEffect from "react-typing-effect";
import Social from "../Common/social";

function Home() {
  return (
    <div className="contents home">
      <img src={dp} alt="profile picture" className="display-picture" />
      <ReactTypingEffect
        className="typing-effect"
        text={"I am Shaun Mccaughey. I am a React Developer!!!"}
      />
      <Social />
    </div>
  );
}
export default Home;
