import { HashRouter as Router, Routes, Route } from "react-router";
//import { Login } from "./Pages/User/Login";
//import { Signup } from "./Pages/User/Signup";
import { HomePage } from "./Pages/User/HomePage";
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
              <Route path="/" element={<HomePage />} />
              {/* <Route path="/" element={<Login />} />
              <Route path="/Registration" element={<Signup />} />
              <Route path="/HomePage" element={<HomePage />} /> */}
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
