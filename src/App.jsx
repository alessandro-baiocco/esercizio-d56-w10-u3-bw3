import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LinkedinFooter from "./components/footer/LinkedinFooter";
import MyNav from "./components/myNav";
import ProfileMain from "./components/profileMain/ProfileMain";

import Posts from "./components/homePage/Posts";
import GetJobsPage from "./components/jobPage/GetJobsPage";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#F4F2EE" }}>
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/profile/me" element={<ProfileMain />} />
          <Route path="/profile/me" element={<LinkedinFooter />} />
          <Route path="/profile/:userId" element={<ProfileMain />} />
          <Route path="/jobs" element={<GetJobsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
