import "./App.css"
import React, { useState} from "react";
import Context from "./component/Context";
import Content from "./component/Content";

function App(){
  return (
    <>
    <Context>
      <Content />
    </Context>
    </>
  )
}

export default App;