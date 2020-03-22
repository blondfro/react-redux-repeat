import React from "react";
import { render } from "react-dom";

function Index() {
  return <div>Some text</div>;
}

render(<Index />, document.getElementById("app"));

export default Index;
