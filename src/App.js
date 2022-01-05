import "./styles/index.css";
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

        {/* Affiche DropDown uniquement au click de cet élément et pas sur les autres */}

        <NavItem icon={<Icons.FaArrowDown />}>
          <DropDown />
        </NavItem>
      </Navbar>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Moiiiiiiiiiiiiiiiii
      </h1>
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

//Création de la fonction DropDown qui aura une autre fonction à l'intérieur pour la geston de son affichage

function DropDown() {
  //Initialisation du state pour naviguer entre les différentes menu à travers la CSSTransition et je l'initialise à "main" par defaut
  const [activeMenu, setActiveMenu] = useState("main");

  //Création de la fonction d'affichage de DropDownItem
  function DropDownItem({ iconLeft, children, iconRight, goToMenu }) {
    return (
      //Je définis l'évenement sur l'item
      <a
        href="#"
        className="menu-item"
        onClick={() => goToMenu && setActiveMenu(goToMenu)}
      >
        <span className="icon-button">{iconLeft}</span>
        {children}
        <span className="icon-right">{iconRight}</span>
      </a>
    );
  }

  //Utilisation de DropDownItem pour le render de la fonction parente DropDown/Utilisation de la fonction comme une balise
  return (
    <div className="dropdown">
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
      >
        <div className="menu">
          <DropDownItem iconRight={<Icons.FaArrowRight />}>
            Mon Profile
          </DropDownItem>
          <DropDownItem
            iconRight={<Icons.FaArrowRight />}
            iconLeft={<Icons.FaCog />}
            // En cliquant sur settings j'irais au menu settings grace trois parms:la var goToMenu/CSSTRansition/Le state:activeMenu
            goToMenu="settings"
          >
            Settings
          </DropDownItem>
          <DropDownItem iconRight={<Icons.FaArrowRight />} iconLeft="🦧">
            Animals
          </DropDownItem>
        </div>
      </CSSTransition>

      {/* Menu Settings       */}
      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
      >
        <div className="menu">
          <DropDownItem iconLeft={<Icons.FaArrowLeft />} goToMenu="main">
            <h2>Mes compétences</h2>
          </DropDownItem>
          <DropDownItem iconLeft={<Icons.FaBolt />}>HTML5</DropDownItem>
          <DropDownItem iconLeft={<Icons.FaBolt />}>CSS3</DropDownItem>
          <DropDownItem iconLeft={<Icons.FaBolt />}>JS</DropDownItem>
          <DropDownItem iconLeft={<Icons.FaReact />}>
            <a href="https://deploiementreactv5.vercel.app/">ReactJS</a>
          </DropDownItem>
        </div>
      </CSSTransition>

      {/* Ajout Menu Animals */}
      <CSSTransition
        in={activeMenu === "animals"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
      >
        <div className="menu">
          <DropDownItem goToMenu="main" iconLeft={<Icons.FaArrowLeft />}>
            <h2>Animals</h2>
          </DropDownItem>
          <DropDownItem leftIcon="🦘">Kangaroo</DropDownItem>
          <DropDownItem leftIcon="🐸">Frog</DropDownItem>
          <DropDownItem leftIcon="🦋">Horse?</DropDownItem>
          <DropDownItem leftIcon="🦔">Hedgehog</DropDownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
export default App;
