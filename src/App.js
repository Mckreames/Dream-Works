import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DreamWorksNav from "./Components/DreamWorksNav/DreamWorksNav";
import Home from "./Components/Home/Home";
import AboutMe from "./Components/AboutMe/AboutMe";
import Projects from "./Components/Projects/Projects";
import Activities from "./Components/Activities/Activities";
import TermsOfService from "./Components/TermsOfService/TermsOfService";
// import Footer from "./Components/Footer/Footer";
// import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL ?? "/"}>
      <div className="App">
        <DreamWorksNav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-me" element={<AboutMe />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/activities" element={<Activities />}></Route>
          <Route path="/Terms-of-service" element={<TermsOfService />}></Route>
          {/* <Route path="*" element={<NotFound />}></Route> */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
