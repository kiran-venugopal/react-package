import React from "react";
import Component from "./components/Component";
import "./style.css";

function PackageName() {
  return (
    <div className="react-package">
      React Package <Component text="with typescript" />{" "}
    </div>
  );
}

export default PackageName;
