import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Section from "./Section";

function App() {
  
  const [grouping, setGrouping] = useState(localStorage.getItem("grouping") || "Status");
  const [ordering, setOrdering] = useState(localStorage.getItem("ordering") || "Priority");

  // Update localStorage whenever grouping or ordering changes
  useEffect(() => {
    localStorage.setItem("grouping", grouping);
  }, [grouping]);

  useEffect(() => {
    localStorage.setItem("ordering", ordering);
  }, [ordering]);

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
