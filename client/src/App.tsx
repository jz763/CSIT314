import { HashRouter as Router, Routes, Route } from "react-router";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";
import { Navbar } from "./assets/Components/Navbar";

function App() {
  return (
    <>
      <div>
        {/* Temporary */}
        <Navbar />

        <Router>
          <Routes>
            <Route>
              <Route path="/" element={<Login />} />
              <Route path="/Registration" element={<Signup />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
