import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <ul className="list-group mb-4">
        <li className="list-group-item">
          <Link to=".">home</Link>
        </li>
        <li className="list-group-item">
          <Link to="about">about</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
