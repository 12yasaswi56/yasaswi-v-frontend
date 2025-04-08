// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./Pages/Home";
// import Contact from "./Pages/Contact";
// import Login from "./Pages/Login";
// import Register from "./Pages/Register";
// import ForgotPassword from "./Pages/ForgotPassword";
// import OTPVerification from "./Pages/OTPVerification";
// import Slots from "./Pages/Slots";
// import AdminMeetings from "./Pages/AdminMeetings";
// import StartUp from "./Pages/StartUp";
// import MentorApplication from "./Pages/MentorApplication";
// import AdminMentorStatusPage from "./Pages/AdminMentorStatusPage";
// import ResetPassword from "./Pages/ResetPassword";
// import Expertise from "./Pages/Expertise";
// import MentorsPage from "./Pages/MentorsPage";

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/AdminMeetings" element={<AdminMeetings />} />
//         <Route path="/verify-otp" element={<OTPVerification />} />
//         <Route path="/slots" element={<Slots />} />
//         <Route path="/StartUp" element={<StartUp />} />
//         <Route path="/MentorApplication" element={<MentorApplication />} />
//         <Route path="/AdminMentorStatusPage" element={<AdminMentorStatusPage />} />
//         <Route path="/mentors" element={<MentorsPage />} />
//         <Route path="/ResetPassword" element={<ResetPassword />} />
//         <Route path="/Expertise" element={<Expertise />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/ForgotPassword";
import OTPVerification from "./Pages/OTPVerification";
import Slots from "./Pages/Slots";
import AdminMeetings from "./Pages/AdminMeetings";
import StartUp from "./Pages/StartUp";
import MentorApplication from "./Pages/MentorApplication";
import AdminMentorStatusPage from "./Pages/AdminMentorStatusPage";
import ResetPassword from "./Pages/ResetPassword";
import Expertise from "./Pages/Expertise";
import MentorsPage from "./Pages/MentorsPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/AdminMeetings" element={<AdminMeetings />} />
        <Route path="/verify-otp" element={<OTPVerification />} />
        <Route path="/slots" element={<Slots />} />
        <Route path="/StartUp" element={<StartUp />} />
        <Route path="/MentorApplication" element={<MentorApplication />} />
        <Route path="/AdminMentorStatusPage" element={<AdminMentorStatusPage />} />
        <Route path="/mentors" element={<MentorsPage />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/Expertise" element={<Expertise />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

