import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Section from "./Section";

function App() {
  const [grouping, setGrouping] = useState("Status");
  const [ordering, setOrdering] = useState("Priority");

  return (
    <div>
      <Navbar
        grouping={grouping}
        setGrouping={setGrouping}
        ordering={ordering}
        setOrdering={setOrdering}
      />
      <Section grouping={grouping} ordering={ordering} />
    </div>
  );
}

export default App;
