// Ajout des imports
import "./RentalTitle.scss";
import { Component } from "react";

// Création de l'export classt " RentalTitle"
export default class RentalTitle extends Component {
	render() {

// Qui retourne en HTML le titre et la localisation
		return (
			<>
				<h1 className="title">{this.props.title}</h1>
    <h4 className="location">{this.props.location}</h4>
			</>
		);
	}
}