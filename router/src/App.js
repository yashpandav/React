import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./compo/home";
import About from "./compo/about";
import Other from "./compo/other";
import More from "./compo/more";
import Main from "./compo/main";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <NavLink to={"/"}>
            <li>Home</li>
          </NavLink>
          <NavLink to={"/about"}>
            <li>About</li>
          </NavLink>
          <NavLink to={"/other"}>
            <li>Other</li>
          </NavLink>
          <NavLink to={"/more"}> 
            <li>More</li>
          </NavLink>
        </ul>
      </nav>

          <Routes>
            <Route path="/" element = {<Main/>}></Route>
              <Route index element = {<Home></Home>}></Route>
              <Route path="/about" element = {<About></About>}></Route>
              <Route path="/other" element = {<Other></Other>}></Route>
              <Route path="/more" element = {<More></More>}></Route>
              <Route path="*" element = {<div>nothing</div>}>
            </Route>
          </Routes>
    </div>
  );
}

export default App;
