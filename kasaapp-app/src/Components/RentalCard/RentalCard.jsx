// Ajout des imports
import './RentalCard.scss';
import { Link } from "react-router-dom";
import{ Component } from "react";

// Création de l'export class " RentalCard"
export default class RentalCard extends Component {
	render() {
// Qui retourne en HTML l'id, l'overlay, l'image et le titre, le tout dans un lien 
		return (
			<Link className="rentalcard" to={"/rental/" + this.props.id}>
					<div className="rentalcard__overlay"></div>
					<img className="rentalcard__img" src={this.props.cover} alt=""></img>
					<h2 className="rentalcard__title">{this.props.title}</h2>
			</Link>
		);
	}
}