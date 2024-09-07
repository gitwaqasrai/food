import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import Favourite from "./Pages/Favourite/Favourite";
import Details from "./Pages/Details/Details";

function App() {
  return (
    <div className="">
      <div className="">
        <NavBar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
