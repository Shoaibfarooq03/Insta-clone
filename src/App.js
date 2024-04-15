import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import SignUp from "./components/singup/signup"; 
import Home from "./components/home/home";
import Profile from "./components/profile/profile";
import SidebarNavbar from "./components/sidebar-navbar/side-navb";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/feed" element={<Home/>} />
          <Route
            path="/*"
            element={
              <>
                <SidebarNavbar /> 
                <Routes>
                 
                  <Route path="/profile" element={<Profile/>} />
                </Routes>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
