import { Routes, Route } from "react-router-dom";
import SignIn from "../authentication/SignIn";
import SignUp from "../authentication/SignUp";
import Home from "../pages/Home";
import Chat from "../pages/Chat";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Create from "../pages/Create";

const Navigation = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Create" element={<Create />} />
      </Routes>
    </>
  );
};

export default Navigation;
