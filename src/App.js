import logo from "./logo.svg";
import "./App.css";
import { Navbar, Nav } from "react-bootstrap";
import Home from "./Home.js";
import About from "./About.js";
import Users from "./Users.js";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
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
          <Route path="/" Component={Home}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/users" Component={Users}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
