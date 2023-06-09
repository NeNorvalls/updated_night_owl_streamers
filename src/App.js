import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
// import Register from "./auth/Register/Register";
// import Login from "./auth/Login/Login";
// import Logout from "./auth/Logout/Logout";
import Home from "./pages/Home/Home";
// import Venues from "./pages/Venues/Venues";
// import UserProfile from "./profiles/User/UserProfile/UserProfile";
// import VenueManagerProfile from "./profiles/VenueManager/ManagerProfile/ManagerProfile";
// import CreateBooking from "./profiles/User/CreateBooking/CreateBooking";
// import CreateVenue from "./profiles/VenueManager/CreateVenue/CreateVenue";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/create-venue" element={<CreateVenue />} />
          <Route path="/create-booking" element={<CreateBooking />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/manager-profile" element={<VenueManagerProfile />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
