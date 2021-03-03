import "./App.css";
import SideNav from "./Common/SideNav";
import Home from "./contents/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./contents/About";
import Project from "./contents/project";
import Skills from "./contents/Skills";
import Contact from "./contents/Contact";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence>
      <Router>
        <div className="App">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/project">
            <Project />
          </Route>
          <Route exact path="/skills">
            <Skills />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <SideNav />
        </div>
      </Router>
    </AnimatePresence>
  );
}

export default App;
