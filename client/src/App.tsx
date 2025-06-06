import { HashRouter as Router, Routes, Route } from "react-router";
import { Login } from "./Pages/User/Login";
import { Signup } from "./Pages/User/Signup";
import { HomePage } from "./Pages/User/HomePage";
import { SearchResults } from "./Pages/User/SearchResults";
import { Event } from "./Pages/User/Event";
import { PaymentPage } from "./assets/Components/PaymentForm.tsx";
import { OrgSignup } from "./Pages/Organisers/OrgSignup.tsx";
import { NotificationPage } from "./Pages/User/NotificationList.tsx";

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
        <Route path="/OrgSignup" element={<OrgSignup />} />
        <Route path="/Notifications" element={<NotificationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
