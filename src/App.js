import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/app.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import JobPortal from "./pages/JobPortal";
import MobileNav from "./components/MobileNav";
import AuthForm from "./components/AuthForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/job-portal"
          element={<JobPortal />}
        />
        <Route
          path="/login"
          element={<AuthForm />}
        />
      </Routes>
      <Footer />
      <MobileNav />
    </Router>
  );
}

export default App;
