// Ajout des imports
import "./RentalHost.scss";
import { Component } from "react";

// Création de l'export class " RentalHost"
export default class RentalHost extends Component {
	render() {
		return (
// Qui renvoi en HTML le nom et l'image de l'host
			<div className="host">
				<p className="host__name">{this.props.host.name}</p>
				<img className="host__img" src={this.props.host.picture} alt=""></img>
			</div>
		);
	}
}