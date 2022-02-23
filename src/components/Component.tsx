import React from "react";
import "./component-style.css";

type ComponentPropsType = {
  text: string;
};

export default function Component({ text }: ComponentPropsType) {
  return <div className="label"> {text} </div>;
}
