// Ajout des imports
import "./Herobanner.scss";
import { Component } from "react";

// Création de l'export class "Herobanner".
export default class Herobanner extends Component {
	render() {
// Si "this.props.origin" = "homepage", alors on renvoi la class " herobanner_title"
		if (this.props.origin === "homepage") {
			return (
				<div className="herobanner">
					<h1 className="herobanner__title">Chez vous, partout et ailleurs</h1>
				</div>
			);
// Si "this.props.origin" = "about", alors on renvoi la class " herobanner_about"
		} else if (this.props.origin === "about") {
			return <div className="herobanner__about"></div>;
		}
	}
}