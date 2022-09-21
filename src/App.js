import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Privacy from './Pages/Privacy/Privacy';
import Page1 from './Pages/Page1/Page1';
import Page2 from './Pages/Page2/Page2';
import Blog from './Pages/Blog/Blog';
// import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div
          className="NavLink"
          style={{
            paddingTop: '20px',
          }}
        >
          <NavLink
            to="/"
            style={{
              paddingRight: '20px',
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            style={{
              paddingRight: '20px',
            }}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            style={{
              paddingRight: '20px',
            }}
          >
            Contact
          </NavLink>
          <NavLink
            to="/privacy"
            style={{
              paddingRight: '20px',
            }}
          >
            Privacy
          </NavLink>
          <NavLink
            to="/page1"
            style={{
              paddingRight: '20px',
            }}
          >
            Page 1
          </NavLink>
          <NavLink
            to="/page2"
            style={{
              paddingRight: '20px',
            }}
          >
            Page 2
          </NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
