import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Aside from "./components/profileAside/Aside";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileMain from "./components/profileMain/profilemain";
import { Col, Container, Row } from "react-bootstrap";
import LinkedinFooter from "./components/footer/LinkedinFooter";
import MyNav from "./components/myNav";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#F4F2EE" }}>
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/profile/me" element={<ProfileMain />} />
          <Route path="/profile/me" element={<LinkedinFooter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
