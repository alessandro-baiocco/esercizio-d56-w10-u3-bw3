import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LinkedinFooter from "./components.jsx/LinkedinFooter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LinkedinFooter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
