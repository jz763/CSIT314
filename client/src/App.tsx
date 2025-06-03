import { HashRouter as Router, Routes, Route } from "react-router";
import { Login } from "./Pages/User/Login";
import { Signup } from "./Pages/User/Signup";
import { HomePage } from "./Pages/User/HomePage";
// import { Navbar } from "./assets/Components/Navbar";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Registration" element={<Signup />} />
        <Route path="/HomePage" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
