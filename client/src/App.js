import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Intro from "./pages/Intro";
import Login from "./core/auth/Login";
import Register from "./core/user/Register";
import Home from "./pages/home";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/Admin" element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
