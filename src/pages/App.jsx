import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import SignUp from "./Signup";

import Boards from "./Boards";
import Items from "./Items";

import NotFound from "./NotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/boards" element={<Boards />}></Route>
        <Route path="/items" element={<Items />}></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

export default App;
