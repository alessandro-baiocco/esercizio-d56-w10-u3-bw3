import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileMain from "./components/profilemain";
import Skills from "./components/Skills";

import Resouce from "./components/Resource";
import Lenguages from "./components/Lenguages";
import Hobbies from "./components/Hobbies";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#F4F2EE" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/profile/me" element={<ProfileMain />} />
          <Route path="/prova" element={<Hobbies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
