import React from "react";
import { render } from "react-dom";

function Index(props) {
  return <div>Some text</div>;
}

render(<Index />, document.getElementById("app"));

export default Index;
