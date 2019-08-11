import * as React from "react";
import { render } from "react-dom";
import { Frame } from "framer";
import "./styles.css";

export function MyComponent() {
  return <Frame size={150} background={"#fff"} radius={30} />;
}

const rootElement = document.getElementById("root");
render(<MyComponent />, rootElement);
