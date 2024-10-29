import "./App.css";
import { Footer } from "./HomePage/components/Footer";
import { HomePage } from "./HomePage/HomePage";
import { LoginPage } from "./Login/LoginPage";
import { Navbar } from "./NavbarAndFooter/Navbar";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="flex-grow-1">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default App;
