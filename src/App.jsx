import { Routes, Route, BrowserRouter } from "react-router-dom";
import {GoogleOAuthProvider} from '@react-oauth/google'

import Login from "./pages/LoginPage";
import PrivacyPage from "./pages/PrivacyPolicy";
import SignUp from "./pages/signUpPage";
// import Google from "./hooks/Auth/Google";

export default function App()
{
  return (
    <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      {/* <GoogleOAuthProvider clientId="470373993744-tjq6l6bk7ikvbvl46vpbd12pcqepuctb.apps.googleusercontent.com">
            <Google>
            </Google>
          </GoogleOAuthProvider>
        */}
      </>
    );
}
