import React from "react";
import "./App.css";
import Dashboard from "./Dashboard";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="App">
        <h1>Spongebob character dashboard</h1>
        <Dashboard />
      </div>
    </>
  );
}

export default App;
