import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserProfile from "./components/Profile";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  console.log(isLoggedIn);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        {isLoggedIn && <Route path="/about" element={<About />} />}
        {isLoggedIn && <Route path="/profile" element={<UserProfile />} />}
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
