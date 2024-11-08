import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import SignUp from "./Signup";

import Boards from "./Boards";
import Items from "./Items";
import Item from "./Item";
import AddItem from "./AddItem";

import NotFound from "./NotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/boards" element={<Boards />}></Route>

        <Route path="/items">
          <Route index element={<Items />} />
          <Route path=":id" element={<Item />} />
        </Route>

        <Route path="/additem" element={<AddItem />}></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

export default App;
