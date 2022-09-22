// Ajout des imports
import "./Rental.scss";
import { Component } from "react";
import  Carrousel  from "../../Components/Carrousel/Carrousel";
import Collapse from "../../Components/Collapse/Collapse.jsx";
import Error from "../../Containers/Errors/Errors";
import data from "../../Data/data.json";
import RentalHost from "../../Components/RentalHeader/RentalHost/RentalHost";
import RentalRatings from "../../Components/RentalHeader/RentalRatings/RentalRatings";
import RentalTags from "../../Components/RentalHeader/RentalTags/RentalTags";
import RentalTitle from "../../Components/RentalHeader/RentalTitle/RentalTitle";

// Création de l'export class "Rental"
export default class Rental extends Component {
	render() {
		const rentalData = data;
		const rentalUrlId = window.location.pathname.substr(8);
		const rental = rentalData.find((item) => item.id === rentalUrlId);
// Qui renvoi soit la class Error, ou le HTML contenant les exports class : Carrousel, RentalTitle, RentalTags, RentalRatings & Collapse
		if (!rental) return <Error />;
		return (
			<div className="rental">
				<Carrousel pictures={rental.pictures}></Carrousel>
				<div className="rental__wrapper">
					<div className="rental__informations">
						<RentalTitle title={rental.title} location={rental.location} />
						<RentalTags tags={rental.tags} />
					</div>
					<div className="rental__host">
						<RentalRatings ratings={rental.rating} />
						<RentalHost host={rental.host} />
					</div>
				</div>
				<div className="rental__details">
					<Collapse title="Équipements" content={rental.equipments}></Collapse>
					<Collapse title="Description" content={rental.description}></Collapse>
				</div>
			</div>
		);
	}
}