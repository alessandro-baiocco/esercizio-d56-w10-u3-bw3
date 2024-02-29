import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LinkedinFooter from "./components/footer/LinkedinFooter";
import MyNav from "./components/myNav";
import MyProfileMain from "./components/profileMain/MyProfileMain";

import Posts from "./components/homePage/Posts";
import GetJobsPage from "./components/jobPage/GetJobsPage";
import JobSearch from "./components/jobPage/JobSearch";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#F4F2EE" }}>
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/myprofile/" element={<MyProfileMain />} />
          <Route path="/myprofile/" element={<LinkedinFooter />} />
          <Route path="/profile/:userId" element={<MyProfileMain />} />
          <Route path="/jobs" element={<GetJobsPage />} />
          <Route path="/jobs/Search" element={<JobSearch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
