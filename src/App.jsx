// src/App.jsx
import React from "react";
import TodayMatches from "./pages/TodayMatches";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <section className="home" id="home">
      <div className="content">
        <h2>
          مباريات اليوم وجدول ترتيب <span>البطولات</span>
        </h2>

        <div className="cells-container">
          <div className="cell">
            <p className="title">مباريات اليوم</p>
            <p className="icon">#</p>
          </div>
          <div className="cell">
            <p className="title">ترتيب البطولات</p>
            <p className="icon">$</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        {/* NAVBAR STARTS */}
        <header style={{ background: "orange" }}>
          <nav className="navbar">
            <ul>
              <li>
                <Link to="/">البطولات</Link>
              </li>
              <li>
                <Link to="/today-matches">مباريات اليوم</Link>
              </li>
            </ul>
          </nav>

          <Link className="logo" to="/">
            <i className="fa-regular fa-futbol"></i>
            نقاط
          </Link>
        </header>
        {/* NAVBAR ENDS */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/today-matches" element={<TodayMatches />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
