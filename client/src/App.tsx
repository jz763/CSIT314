import { HashRouter as Router, Routes, Route } from "react-router";
import { Login } from "./Pages/User/Login";
import { Signup } from "./Pages/User/Signup";
import { HomePage } from "./Pages/User/HomePage";
import { SearchResults } from "./Pages/User/SearchResults";
import { Event } from "./Pages/User/Event";
import { PaymentPage } from "./assets/Components/PaymentForm.tsx";
import { OrgSignup } from "./Pages/Organisers/OrgSignup.tsx";
import { OrgLogin } from "./Pages/Organisers/Login.tsx";
import { EventCreation } from "./Pages/Organisers/EventCreation.tsx";
import { EventManage } from "./Pages/Organisers/EventManage.tsx";
import { NotificationPage } from "./Pages/User/NotificationList.tsx";
import { TicketPage } from "./Pages/User/TicketPage.tsx";
import { OrgHome } from "./Pages/Organisers/OrgHome.tsx";

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
        <Route path="/OrgLogin" element={<OrgLogin />} />
        <Route path="/EventCreation" element={<EventCreation />} />
        <Route path="/EventManage" element={<EventManage />} />
        <Route path="/Notifications" element={<NotificationPage />} />
        <Route path="/TicketPage" element={<TicketPage />} />
        <Route path="/OrgHome" element={<OrgHome />} />
      </Routes>
    </Router>
  );
}

export default App;
