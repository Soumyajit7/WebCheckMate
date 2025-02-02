import React from "react";
import Home from "./Home";
import Dropdown from "./Dropdown";
import { Routes, Route } from "react-router-dom";
import Checkbox from "./Checkbox";
import Scroll from "./Scroll";
import Popup from "./Popup";
import MouseHover from "./MouseHover";
import Iframe from "./Iframe";
import DragAndDrop from "./DragAndDrop";
import ResizableBox from "./ResizableBox";
import Slider from "./Slider";
import RightClickComponent from "./RightClick";
import KeyboardEvent from "./KeyboardEvent";
import MultipleWindows from "./MultipleWindows";
import ImpliciteExplicite from "./ImpliciteExplicite";
import WebTable from "./WebTable";
import JavascriptExecutor from "./JavascriptExecutor";
import ScreenShot from "./ScreenShot";
import Questions from "./Questions";

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
        <Route path="/iframe" element={<Iframe />} />
        <Route path="/dragNdrop" element={<DragAndDrop />} />
        <Route path="/resizable" element={<ResizableBox />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/right-click" element={<RightClickComponent />} />
        <Route path="/keyboard-events" element={<KeyboardEvent />} />
        <Route path="/multiple-windows" element={<MultipleWindows />} />
        <Route
          path="/multiple-windows/:windowid"
          element={<MultipleWindows />}
        />
        <Route path="/implicite-explicite" element={<ImpliciteExplicite />} />
        <Route path="/webtable" element={<WebTable />} />
        <Route path="/js-executor" element={<JavascriptExecutor />} />
        <Route path="/ss" element={<ScreenShot />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/*" element={<>No Page Found</>} />
      </Routes>
    </div>
  );
};

export default Main;
