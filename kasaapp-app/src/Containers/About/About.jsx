// Ajout des imports
import "./About.scss";
import { Component } from "react";
import Collapse from "../../Components/Collapse/Collapse";
import guidelines from "../../Data/guidelines.json";
import Herobanner from "../../Components/Herobanner/Herobanner";

// Création de l'export class " About "
export default class About extends Component {
	render() {
// Qui retourne en HTML le titre, l'id et la description (guideline.json)
		return (
			<div className="about">
				<Herobanner origin="about"></Herobanner>
				<section className="about__guidelines">
					{guidelines.map((guideline) => {
						return (
							<Collapse title={guideline.title} key={guideline.id} content={guideline.description} />
						);
					})}
				</section>
			</div>
		);
	}
}