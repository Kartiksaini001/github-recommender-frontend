import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Repos from "./components/Repos";
import Collaborators from "./components/Collaborators";

function App() {
  return (
    <div className="bg-gradient-to-br from-indigo-300 via-purple-300 to-rose-300 min-h-screen">
      <div className="bg-white h-16 pl-10 flex items-center shadow-md">
        <Link
          to="/"
          className="bg-gradient-to-tr from-red-400 to-yellow-400 bg-clip-text text-transparent font-extrabold text-[2rem]"
        >
          Collab Hub
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="repos" element={<Repos />} />
        <Route path="collaborators" element={<Collaborators />} />
      </Routes>
    </div>
  );
}

export default App;
