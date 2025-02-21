import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer";
import TravellerTrip from "./Components/TravellerTrip/TravellerTrip";
import CreateBlog from "./Components/CreateBlog/CreateBlog";
import SingleBlogPage from "./Components/HomeBlogs/SingleBlogPage";

const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <Router>
        
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/travel" element={<TravellerTrip />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/traveller/:id" element={<SingleBlogPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
