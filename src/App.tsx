import { useState } from "react";
import "./App.css";
import Router from "./router";

function App() {
  const [people, setPeoples] = useState([
    { name: "Bari" },
    { name: "Felipe" },
    { name: "Luiz" },
  ]);

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
