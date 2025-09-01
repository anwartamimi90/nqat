// src/App.jsx
import React from "react";

function App() {
  return (
    <div className="app">
      {/* NAVBAR STARTS */}
      <header style={{ background: "orange" }}>
        <nav className="navbar">
          <ul>
            <li>
              <a href="">البطولات</a>
            </li>
            <li>
              <a href="">مباريات اليوم</a>
            </li>
          </ul>
        </nav>

        <a className="logo" href="/">
          <i class="fa-regular fa-futbol"></i>
          نقاط
        </a>
      </header>
      {/* NAVBAR ENDS */}

      {/* hero section starts */}
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
      {/* hero section ends */}

      {/* about section starts */}
      <section className="about" id="about">
        <h2 className="heading">
          {" "}
          <i class="fa-regular fa-futbol"></i> About<span>Me</span>
        </h2>
        <div className="row">
          <div class="image">
            <p>image here</p>
          </div>
          <div className="content">
            <p>Content here</p>
          </div>
        </div>
      </section>
      {/* about section ends */}
    </div>
  );
}

export default App;
