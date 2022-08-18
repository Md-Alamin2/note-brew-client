import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/auth/sign-up/Home/Home";
import SignUp from "./components/auth/sign-up/SignUp";

const App = () => {
  return (
    <StrictMode>
      <div>
        
        <BrowserRouter>
            <Routes>
              <Route path="signup" element={<SignUp/>} />
              <Route path="/" element={<Home/>} />
            </Routes>
        </BrowserRouter>
      </div>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
