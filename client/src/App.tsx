import { HashRouter as Router, Routes, Route } from "react-router";
<<<<<<< HEAD
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";
import { Navbar } from "./assets/Components/Navbar";
import TestPage from "./Pages/TestPage";

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
              <Route path= "/testpage" element= {<TestPage/>}></Route>
            </Route>
          </Routes>
        </Router>
      </div>
    </>
=======
import { Login } from "./Pages/User/Login";
import { Signup } from "./Pages/User/Signup";
import { HomePage } from "./Pages/User/HomePage";
import { SearchResults } from "./Pages/User/SearchResults";
import { Event } from "./Pages/User/Event";
import { PaymentPage } from "./assets/Components/PaymentForm.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Registration" element={<Signup />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/SearchResults" element={<SearchResults />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/PaymentPage" element={<PaymentPage />} />
      </Routes>
    </Router>
>>>>>>> refs/remotes/master/master
  );
}

export default App;
