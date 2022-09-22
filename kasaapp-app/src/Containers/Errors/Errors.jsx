// Ajout des imports
import "./Errors.scss";
import { Component } from "react";
import { Link } from "react-router-dom";

// Création de l'export class "Error"
export default class Error extends Component {
	render() {
// Qui retourne en HTML l'erreur avec le titre, la description et un bouton de retour à la page d'accueil
		return (
			<div className="error">
				<h1 className="error__title">404</h1>
				<p className="error__description">Oups! La page que vous demandez n'existe pas.</p>
				<Link className="error__btn" to="/">Retourner sur la page d'accueil</Link>
			</div>
		);
	}
}