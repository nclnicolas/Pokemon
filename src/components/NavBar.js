import { Outlet, Link } from "react-router-dom";
import "../styles/styleNavBar.css";
import Home from '../assets/images/HomeeIcon.ico';
import HomePika from '../assets/images/homeIcon.ico';
import PokebolaIcon from '../assets/images/pokebolaIcon.ico';
import InformationIcon from '../assets/images/informationIcon.ico';
import Contact from '../assets/images/contactIco.ico';
import NavBarIcon from '../assets/images/navBarIcon.ico';
import pokemonnavbar from '../assets/images/pokemonNavBar.png';




export const NavBar = () => {
  return (
    <>
      <div id="navbar">
        <input type="checkbox" id="check" />
        <label for="check" className="check-btn">
            <i className="asd"><img className="icon-NavBar" src={HomePika}></img>Menu</i>
           </label>
           <Link className="active" to='/'><img className="img-navBar" src={pokemonnavbar}></img> <img className="icon-NavBar-duck" src={NavBarIcon}></img></Link>
          
        <nav>
        <Link to='/'><img className="icon-NavBar" src={Home}></img>Home</Link>
          <Link to='/pokebola'><img className="icon-NavBar" src={PokebolaIcon}></img>Pokebola</Link>
          <Link to='/information'><img className="icon-NavBar" src={InformationIcon}></img> Information</Link>
          <Link to='/contact'><img className="icon-NavBar" src={Contact}></img> Contact</Link>
          
        </nav>
        <Outlet />
      </div>
    </>
  );
};
export default NavBar;
