import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import Repos from "./components/Repos";
import Collaborators from "./components/Collaborators";

function App() {
  return (
    <div>
      <div>Navbar</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user" element={<User />} />
        <Route path="repos" element={<Repos />} />
        <Route path="collaborators" element={<Collaborators />} />
      </Routes>
    </div>
  );
}

export default App;
