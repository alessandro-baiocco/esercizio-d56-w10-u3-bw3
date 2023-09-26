import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LinkedinFooter from "./components/footer/LinkedinFooter";
import MyNav from "./components/myNav";
import ProfileMain from "./components/profileMain/profilemain";
import SideBarLeft from "./components/homePage/SideBarLeft";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#F4F2EE" }}>
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<SideBarLeft />} />
          <Route path="/profile/me" element={<ProfileMain />} />
          <Route path="/profile/me" element={<LinkedinFooter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
