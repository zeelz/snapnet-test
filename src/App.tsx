import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/:id?" element={<Home />} />
        {/** :id? makes param ?optional, so need for "/" */}
      </Routes>
    </>
  );
}

export default App;
