import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileMain from "./components/profilemain";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/profile/me" element={<ProfileMain />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
