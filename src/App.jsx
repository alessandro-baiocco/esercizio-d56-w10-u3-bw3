import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Aside from "./components/Aside";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Aside />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
