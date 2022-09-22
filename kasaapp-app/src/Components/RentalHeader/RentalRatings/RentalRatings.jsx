// Ajout des imports
import "./RentalRatings.scss";
import { Component } from "react";
import { ReactComponent as Star } from "./star.svg";

// Création de l'export class "RentalRating"
export default class RentalRatings extends Component {
	render() {
		const ratingScale = [1, 2, 3, 4, 5];
// Qui renvoi en HTML le systéme de notation par étoiles
		return (
			<div className="stars">
				{ratingScale.map((n) => (
					<Star
						fill={n <= this.props.ratings ? "#ff6060" : "#f7f7f7"}
						key={`star-${n}`}
						className="star"
					></Star>
				))}
			</div>
		);
	}
}