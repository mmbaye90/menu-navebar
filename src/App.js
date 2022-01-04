import "./App.css";
import { CSSTransition } from "react-transition-group";
import * as Icons from "react-icons/fa";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem icon={<Icons.FaPlus />} />
        <NavItem icon={<Icons.FaBell />} />
        <NavItem icon={<Icons.FaFacebookMessenger />} />

        {/* Affichage de la fonction DropDown au clic de cet élément */}
        <NavItem icon={<Icons.FaArrowDown />}>{/* <DropDownItem/> */}</NavItem>
      </Navbar>
    </div>
  );
}

//Création de la function navbar pour afficher et englober les autres fonctions
function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

//Création de la fonction NavItem pour la gestion de l'affichage au clic du dernier élément

function NavItem({ icon, children }) {
  /*J'initialise mon state pour gerer l'événement au clic et je le fait démarrer à false c a d rien ne s'affiche avant l'év du click
  Au lieu de mettre le setOpen à true,je le met à !different de open,ceci me permettra d'afficher ou de masquer au click*/

  const [open, setOpen] = useState(false);

  return (
    //J'initialise un evenement de type Click sur l'élément du a

    <li className="nav-item">
      <a href="#" onClick={() => setOpen(!open)} className="icon-button">
        {icon}
      </a>
      {open && children}
    </li>
  );
}
export default App;
