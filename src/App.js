import { StrictMode } from "react";
import { render } from "react-dom";
import SignUp from "./components/auth/sign-up/SignUp";

const App = () => {
  return (
    <StrictMode>
      <div>
        <h1 className="text-3xl font-bold">Note brew working.</h1>
        <SignUp/>
      </div>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
