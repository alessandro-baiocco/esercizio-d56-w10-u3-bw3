import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileMain from "./components/profilemain";
import SuggestedForYou from "./components/SuggestedForYou";
import Analyses from "./components/Analyses";
import Resouce from "./components/Resource";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#F4F2EE" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/profile/me" element={<ProfileMain />} />
          <Route path="/prova" element={<Resouce />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
