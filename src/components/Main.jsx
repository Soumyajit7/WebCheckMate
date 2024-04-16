import React from "react";
import Home from "./Home";
import Dropdown from "./Dropdown";
import { Routes, Route } from "react-router-dom";
import Checkbox from "./Checkbox";
import Scroll from "./Scroll";
import Popup from "./Popup";
import MouseHover from "./MouseHover";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/popup" element={<Popup />} />
        <Route path="/dropdown" element={<Dropdown />} />
        <Route path="/checkbox-radiobutton" element={<Checkbox />} />
        <Route path="/scroll" element={<Scroll />} />
        <Route path="/mouse-hover" element={<MouseHover />} />
      </Routes>
    </div>
  );
};

export default Main;
