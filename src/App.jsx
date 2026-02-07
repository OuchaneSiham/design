import { Routes, Route, BrowserRouter } from "react-router-dom";
import {GoogleOAuthProvider} from '@react-oauth/google'

import Login from "./pages/LoginPage";
import PrivacyPage from "./pages/PrivacyPolicy";
import SignUp from "./pages/signUpPage";
import Profile from "./hooks/Auth/Profile";
import Google from "./hooks/Auth/Google";

export default function App()
{
  return (
    <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </>
    );
}
