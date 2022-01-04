import "./App.css";
import { CSSTransition } from "react-transition-group";
import * as Icons from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Icons.FaPlus />
        <Icons.FaBell />
        <Icons.FaFacebookMessenger />
        <Icons.FaArrowDown />
      </Navbar>
    </div>
  );
}

function Navbar(props) {
  return (
    <nav>
      <ul>{props.children}</ul>
    </nav>
  );
}

export default App;
