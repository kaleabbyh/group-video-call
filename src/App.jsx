/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Room from "./pages/Room";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Room />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
