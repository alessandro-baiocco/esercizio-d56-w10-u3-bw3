import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LinkedinFooter from "./components/footer/LinkedinFooter";
import MyNav from "./components/myNav";
import ProfileMain from "./components/profileMain/ProfileMain";

import Posts from "./components/homePage/Posts";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#F4F2EE" }}>
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/profile/me" element={<ProfileMain />} />
          <Route path="/profile/me" element={<LinkedinFooter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
