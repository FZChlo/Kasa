// Ajout des imports
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "./NavbarLogo.svg";
import{ Component } from "react";

// Création de l'export class "Navbar"
export default class Navbar extends Component {
	render() {
// Qui renvoi en HTML le logo, et le lien actif ( Accueil ou a propos) 
		return (
			<div className='navbar'>
				<Logo className="navbar__logo"></Logo>
				<nav className="navbar__nav">
					<NavLink className={({isActive}) => (isActive ? "navbar__nav__link active" : "navbar__nav__link")} to="/">Accueil</NavLink>
     <NavLink className={({isActive}) => (isActive ? "navbar__nav__link active" : "navbar__nav__link")} to="/about">A propos</NavLink>
				</nav>
			</div>
		);
	}
}