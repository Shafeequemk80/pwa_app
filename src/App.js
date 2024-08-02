import logo from "./logo.svg";
import "./App.css";
import { Navbar, Nav } from "react-bootstrap";
import Home from "./Home.js";
import About from "./About.js";
import Users from "./Users.js";
 import { messaging, getToken } from "./firebase"; // Import named exports

import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
 import { useEffect } from "react";

function App() {
  useEffect(() => {
    async function requestNotificationPermission() {
      try {
        await Notification.requestPermission();
        const token = await getToken(messaging);
        console.log('token', token);
      } catch (error) {
        console.log('error', error);
      }
    }

    // Call the function to request permission and get the token
    requestNotificationPermission();
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar bg="primary" data-bs-theme="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/users">
              Users
            </Nav.Link>
          </Nav>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
