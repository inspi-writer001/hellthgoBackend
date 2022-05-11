import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loginmail from "./components/Loginmail";

function App() {
  return (
    <div className="App">
      <Router>
        <Login />
        <Routes>
          <Route path="/Loginmail" element={<Loginmail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
