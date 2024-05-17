import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DreamWorksNav from "./Components/DreamWorksNav/DreamWorksNav";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL ?? "/"}>
      <div className="App">
        <DreamWorksNav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="*" element={<NotFound />}></Route> */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
